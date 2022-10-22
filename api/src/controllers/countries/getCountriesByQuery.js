const { Op } = require('sequelize')
const { Country, Activity } = require('../../db.js')
const { errorCreator } = require('../utils.js')

module.exports = async (req,res, name) => {
    try {
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: Activity
        })
        if(countries.length <= 0) throw errorCreator(`no countries were found with: ${name}`, 404)
        res.status(200).send(countries)
    } catch (error) {
        res.status(error.status || 400).send({error: error.message})
    }
}