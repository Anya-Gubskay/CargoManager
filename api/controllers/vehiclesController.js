const routerUtils = require('../utils/routeUtils');
const vehiclesService = require('../services/vehiclesService');

function getVehicleById(req) {
  return vehiclesService.getVehicleById(req.params.id);
}

function addVehicle(req) {
  return vehiclesService.addVehicle(req.body, req.params.id);
}

function editVehicle(req) {
  return vehiclesService.editVehicle(req.params.id, req.body);
}

function deleteVehicle(req) {
  return vehiclesService.deleteVehicle(req.params.id);
}

function getPaginationItems(req) {
  return vehiclesService.getPaginationItems(req.body, req.params.id);
}

function getVehiclesByCompanyId(req) {
  return vehiclesService.getVehiclesByCompanyId(req.params.id);
}


module.exports = {
  getVehicleById: routerUtils.handleResponse(getVehicleById),
  addVehicle: routerUtils.handleResponse(addVehicle),
  editVehicle: routerUtils.handleResponse(editVehicle),
  deleteVehicle: routerUtils.handleResponse(deleteVehicle),
  getPaginationItems: routerUtils.handleResponse(getPaginationItems),
  getVehiclesByCompanyId: routerUtils.handleResponse(getVehiclesByCompanyId)
};
