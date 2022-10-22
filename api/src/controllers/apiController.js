const axios = require('axios')
const { Country } = require('../db.js')

const api  = 'https://restcountries.com/v3/all'


module.exports = async (req, res) => {
    try {
        let countriesApi = await axios.get(api)
        countriesApi = countriesApi.data.map(country => {
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[1],
                continent: country.continents[0] ,
                capital: country.capital ? country.capital[0] : "none",
                subregion: country.subregion,
                area: country.area,
                population: country.population
            }
        })
        await Country.bulkCreate(countriesApi)
        res.status(201).send({message: 'the api data was added to the database', countries: countriesApi})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}