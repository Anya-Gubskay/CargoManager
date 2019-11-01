const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companiesController');
const exspressJoi = require('express-joi-validator');
const companiesSchema = require('../validators/companiesValidator');
const paginationSchema = require('../validators/paginationValidator');
const passport = require('passport');

router.get(
  '/api/companies/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(companiesSchema.params),
  companiesController.getCompanyById
);

router.post(
  '/api/company',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(companiesSchema),
  companiesController.addCompany
);

router.put(
  '/api/company/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(companiesSchema),
  companiesController.editCompany
);

router.put(
  '/api/company/:id/status',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(companiesSchema.params),
  companiesController.changeCompanyStatus
);

router.post(
  '/api/companiesPagination',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(paginationSchema),
  companiesController.getPaginationItems
);

module.exports = router;
