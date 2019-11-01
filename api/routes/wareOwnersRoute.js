const express = require('express');
const router = express.Router();
const waresOwnersController = require('../controllers/wareOwnersController');
const passport = require('passport');
const exspressJoi = require('express-joi-validator');
const paginationSchema = require('../validators/paginationValidator');
const waresOwnersSchema = require('../validators/waresOwnersValidator');

router.get(
  '/api/waresOwner',
  passport.authenticate('jwt', {session: false}),
  waresOwnersController.getWaresOwners
);

router.get(
  '/api/wareOwners/:id',
  exspressJoi(waresOwnersSchema.params),
  passport.authenticate('jwt', {session: false}),
  waresOwnersController.getWareOwnerById
);

router.post(
  '/api/wareOwner',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(waresOwnersSchema),
  waresOwnersController.addWareOwner
);

router.put(
  '/api/wareOwner/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(waresOwnersSchema),
  waresOwnersController.editWareOwner
);

router.delete(
  '/api/:id/wareOwner',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(waresOwnersSchema.params),
  waresOwnersController.deleteWareOwner
);

router.post(
  '/api/wareOwnersPagination',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(paginationSchema),
  waresOwnersController.getPaginationItems
);

module.exports = router;
