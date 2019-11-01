const express = require('express');
const router = express.Router();
const warehousesController = require('../controllers/warehousesController');
const exspressJoi = require('express-joi-validator');
const warehousesSchema = require('../validators/warehousesValidator');
const paginationSchema = require('../validators/paginationValidator');
const passport = require('passport');

router.get(
  '/api/warehouse/:id',
  passport.authenticate('jwt', {session: false}),
  warehousesController.getWarehouseById
);

router.delete(
  '/api/:id/warehouses',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(warehousesSchema.params),
  warehousesController.deleteWarehouse
);


router.post(
  '/api/warehouse',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(warehousesSchema),
  warehousesController.addWarehouse
);

router.post(
  '/api/warehousesPagination',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(paginationSchema),
  warehousesController.getPaginationItems
);

router.put(
  '/api/warehouse/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(warehousesSchema),
  warehousesController.editWarehouse
);

module.exports = router;
