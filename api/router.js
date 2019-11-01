const express = require('express');
const companiesRoute = require('./routes/companiesRoute.js');
const usersRoute = require('./routes/usersRoute.js');
const warehousesRoute = require('./routes/warehousesRoute.js');
const authorizeRoute = require('./routes/authorizeRoute');
const vehiclesRoute = require('./routes/vehiclesRoute');
const consignmentNoteRoute = require('./routes/consignmentNoteRoute');
const wareOwnersRoute = require('./routes/wareOwnersRoute');


const router = express.Router();

router.use('/', companiesRoute);
router.use('/', usersRoute);
router.use('/', authorizeRoute);
router.use('/', vehiclesRoute);
router.use('/', warehousesRoute);
router.use('/', consignmentNoteRoute);
router.use('/', wareOwnersRoute);
router.use('/', consignmentNoteRoute);

module.exports = router;
