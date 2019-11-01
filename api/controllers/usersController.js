const routerUtils = require('../utils/routeUtils');
const usersService = require('../services/usersService');

function getUserById(req) {
  return usersService.getUserById(req.params.id);
}

function addUser(req) {
  return usersService.addUser(req.body);
}

function deleteUser(req) {
  return usersService.deleteUser(req.params.id);
}

function editUser(req) {
  return usersService.editUser(req.params.id, req.body);
}

function getPaginationItems(req) {
  return usersService.getPaginationItems(req.body);
}

function getDriversByCompanyId(req) {
  return usersService.getDriversByCompanyId(req.params.id);
}

module.exports = {
  getUserById: routerUtils.handleResponse(getUserById),
  addUser: routerUtils.handleResponse(addUser),
  deleteUser: routerUtils.handleResponse(deleteUser),
  editUser: routerUtils.handleResponse(editUser),
  getPaginationItems: routerUtils.handleResponse(getPaginationItems),
  getDriversByCompanyId: routerUtils.handleResponse(getDriversByCompanyId)
};
