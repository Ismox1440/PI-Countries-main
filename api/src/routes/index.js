const { Router } = require('express');
const activitiesRouter = require('./activitiesRouter');
const apiRouter = require('./apiRouter');
const countriesRouter = require('./countriesRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/api-to-db', apiRouter)
router.use('/countries', countriesRouter)
router.use('/activities', activitiesRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
