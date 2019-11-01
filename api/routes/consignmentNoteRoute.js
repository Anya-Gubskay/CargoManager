const express = require('express');
const router = express.Router();
const consignmentNoteController = require('../controllers/consignmentNoteController');
const exspressJoi = require('express-joi-validator');
const consignmentNoteSchemaAdd = require('../validators/consignmentNoteValidatorAdd');
const consignmentNoteSchemaEdit = require('../validators/consignmentNoteValidatorEdit');
const paginationSchema = require('../validators/paginationValidator');
const passport = require('passport');

router.get(
  '/api/consignmentNote/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(consignmentNoteSchemaAdd.params),
  consignmentNoteController.getConsignmentNoteById
);

router.post(
  '/api/consignmentNote/:id',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(consignmentNoteSchemaAdd),
  consignmentNoteController.addConsignmentNote
);

router.put(
  '/api/consignmentNote/:id/status',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(consignmentNoteSchemaAdd.params),
  consignmentNoteController.changeConsignmentNoteStatus
);

router.put(
  '/api/consignmentNote',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(consignmentNoteSchemaEdit),
  consignmentNoteController.editConsignmentNote
);

router.post(
  '/api/consignmentNotesPagination',
  passport.authenticate('jwt', {session: false}),
  exspressJoi(paginationSchema),
  consignmentNoteController.getPaginationItems
);

module.exports = router;
