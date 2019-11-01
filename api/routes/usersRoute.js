const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const exspressJoi = require('express-joi-validator');
const usersSchema = require('../validators/usersValidator');
const paginationSchema = require('../validators/paginationValidator');
const passport = require('passport');

router.get(
  '/api/user/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(usersSchema.params),
  usersController.getUserById
);

router.delete(
  '/api/:id/users',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(usersSchema.params),
  usersController.deleteUser
);

router.post(
  '/api/user',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(usersSchema),
  usersController.addUser
);

router.put(
  '/api/user/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(usersSchema),
  usersController.editUser
);

router.post(
  '/api/usersPagination',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(paginationSchema),
  usersController.getPaginationItems
);

router.get(
  '/api/users/:id',
  passport.authenticate('jwt', { session: false }),
  usersController.getDriversByCompanyId
);

module.exports = router;
