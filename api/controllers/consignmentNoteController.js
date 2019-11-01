const routerUtils = require('../utils/routeUtils');
const consignmentNoteService = require('../services/consignmentNoteService');

function getConsignmentNoteById(req) {
  return consignmentNoteService.getConsignmentNoteById(req.params.id);
}

function changeConsignmentNoteStatus(req) {
  return consignmentNoteService.changeConsignmentNoteStatus(req.params.id);
}

function addConsignmentNote(req) {
  return consignmentNoteService.addConsignmentNote(req.params.id, req.body);
}

function editConsignmentNote(req) {
  return consignmentNoteService.editConsignmentNote(req.body);
}

function getPaginationItems(req) {
  return consignmentNoteService.getPaginationItems(req.body);
}

module.exports = {
  getConsignmentNoteById: routerUtils.handleResponse(getConsignmentNoteById),
  addConsignmentNote: routerUtils.handleResponse(addConsignmentNote),
  editConsignmentNote: routerUtils.handleResponse(editConsignmentNote),
  changeConsignmentNoteStatus: routerUtils.handleResponse(changeConsignmentNoteStatus),
  getPaginationItems: routerUtils.handleResponse(getPaginationItems)
};
