const { Op } = require('sequelize')
const { Country, Activity, CountryActivity } = require('../../db.js')
const {errorCreator, buscarUndefined} = require('../utils')


module.exports = async (req,res) => {
    try {
        const {countries, name,difficulty,duration,season} = req.body;
        const properties = buscarUndefined({countries,name,difficulty,duration,season})
        if(properties.length > 0) throw errorCreator(`the following data was missing: ${properties.toString()}`)
        const countryRow = await Country.findAll({where: {name: {[Op.in]: countries}}})
        if(countryRow.length < 1)  throw errorCreator(`The activity could not be created, because a country with the id was not found: [${countries}]`, 404) 
        const newActivity = await Activity.create({name, difficulty,duration,season})
        await newActivity.addCountry(countryRow, {through: CountryActivity})
        res.status(201).send({message : `the activity was created ${newActivity.dataValues.name} in the countries: ${countryRow.map(country => country.name)}`})
    } catch (error) {
        res.status( error.status || 400).send({error: error.message, aditional: error.aditional})
    }
}