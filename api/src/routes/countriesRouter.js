const { Router } = require('express');
const getCountries = require('../controllers/countries/getAllCountries');
const getCountryByIdController = require('../controllers/countries/getCountryByIdController');
const getCountryByQuery = require('../controllers/countries/getCountriesByQuery');

const countriesRouter = Router()

countriesRouter.get('/', (req,res) => {
        const {name} = req.query
        if(!name) {
            return getCountries(req,res)
        }
        return getCountryByQuery(req,res,name)
})
countriesRouter.get('/:id', getCountryByIdController)

module.exports = countriesRouter;