const routeUtils = require('../utils/routeUtils');
const warehousesService = require('../services/warehousesService');

function getWarehouseById(req) {
  return warehousesService.getWarehouseById(req.params.id);
}

function addWarehouse(req) {
  return warehousesService.addWarehouse(req.body);
}

function editWarehouse(req) {
  return warehousesService.editWarehouse(req.params.id, req.body);
}

function deleteWarehouse(req) {
  return warehousesService.deleteWarehouse(req.params.id);
}

function getPaginationItems(req) {
  return warehousesService.getPaginationItems(req.body);
}

module.exports = {
  getWarehouseById: routeUtils.handleResponse(getWarehouseById),
  addWarehouse: routeUtils.handleResponse(addWarehouse),
  editWarehouse: routeUtils.handleResponse(editWarehouse),
  deleteWarehouse: routeUtils.handleResponse(deleteWarehouse),
  getPaginationItems: routeUtils.handleResponse(getPaginationItems)
};
