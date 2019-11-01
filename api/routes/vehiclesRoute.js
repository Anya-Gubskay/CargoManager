const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehiclesController');
const exspressJoi = require('express-joi-validator');
const passport = require('passport');
const paginationSchema = require('../validators/paginationValidator');
const vehiclesSchema = require('../validators/vehiclesValidator');

router.get(
  '/api/vehicles/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(vehiclesSchema.params),
  vehiclesController.getVehicleById
);
router.get(
  '/api/vehiclesCompanies/:id',
  exspressJoi(vehiclesSchema.params),
  passport.authenticate('jwt', { session: false }),
  vehiclesController.getVehiclesByCompanyId
);

router.delete(
  '/api/:id/vehicles',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(vehiclesSchema.params),
  vehiclesController.deleteVehicle
);

router.post(
  '/api/vehicle/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(vehiclesSchema),
  vehiclesController.addVehicle
);

router.put(
  '/api/vehicle/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(vehiclesSchema),
  vehiclesController.editVehicle
);

router.post(
  '/api/vehiclesPagination/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(paginationSchema),
  vehiclesController.getPaginationItems
);

module.exports = router;

