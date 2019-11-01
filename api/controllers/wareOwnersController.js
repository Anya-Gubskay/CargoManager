const routerUtils = require('../utils/routeUtils');
const wareOwnersService = require('../services/wareOwnersService');

function getWaresOwners() {
  return wareOwnersService.getWaresOwners();
}

function getWareOwnerById(req) {
  return wareOwnersService.getWareOwnerById(req.params.id);
}

function addWareOwner(req) {
  return wareOwnersService.addWareOwner(req.body);
}

function editWareOwner(req) {
  return wareOwnersService.editWareOwner(req.params.id, req.body);
}

function deleteWareOwner(req) {
  return wareOwnersService.deleteWareOwner(req.params.id);
}

function getPaginationItems(req) {
  return wareOwnersService.getPaginationItems(req.body);
}

module.exports = {
  getWaresOwners: routerUtils.handleResponse(getWaresOwners),
  getWareOwnerById: routerUtils.handleResponse(getWareOwnerById),
  addWareOwner: routerUtils.handleResponse(addWareOwner),
  editWareOwner: routerUtils.handleResponse(editWareOwner),
  deleteWareOwner: routerUtils.handleResponse(deleteWareOwner),
  getPaginationItems: routerUtils.handleResponse(getPaginationItems)
};
