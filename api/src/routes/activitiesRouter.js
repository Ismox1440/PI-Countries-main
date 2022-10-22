const { Router } = require('express');
const addActivityController = require('../controllers/activities/addActivityController');
const getActivitiesController = require('../controllers/activities/getActivitiesController');

const activitiesRouter = Router();

activitiesRouter.post('/', addActivityController)
activitiesRouter.get('/', getActivitiesController)

module.exports = activitiesRouter