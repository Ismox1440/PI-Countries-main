const { Country, Activity } = require('../../db.js')
const {errorCreator} = require('../utils')


module.exports = async(req,res) => {
    try {
        const {id} = req.params
        if(typeof id !== 'string' || id.length !== 3) throw new Error('invalid id')
        const country = await Country.findOne({where: {id: id},  include: Activity})
        if(!country) throw errorCreator(`A country with the id was not found: ${id}`, 404)
        res.status(200).send(country)
    } catch (error) {
        res.status(error.status || 400).send({error: error.message})
    }
}