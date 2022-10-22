const { Activity, Country } = require('../../db.js')
const { errorCreator } = require('../utils.js')

module.exports  = async(req,res) => {
    try {
        const activities = await Activity.findAll({include: Country})
        if(activities.length <= 0) throw errorCreator('no activities found', 404)
        res.status(200).send(activities)
    } catch (error) {
        res.status(error.status || 400).send({error:error.message})
    }
}