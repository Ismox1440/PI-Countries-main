const { Router } = require('express');
const apiController = require('../controllers/apiController');

const apiRouter = Router()

apiRouter.post('/', apiController)

module.exports = apiRouter