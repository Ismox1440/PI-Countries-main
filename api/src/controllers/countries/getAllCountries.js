const { Country } = require('../../db.js')
const { errorCreator } = require('../utils.js')

module.exports = async (req, res) => {
    try {
        const coutries = await Country.findAll()
        if(coutries.length < 1) throw errorCreator('no countries found', 404)
        res.status(200).send(coutries)
    } catch (error) {
        res.status(error.status || 400).send({error: error.message})
    }
}