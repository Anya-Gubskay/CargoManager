const routeUtils = require('../utils/routeUtils');
const companiesService = require('../services/companiesService');

function getCompanyById(req) {
  return companiesService.getCompanyById(req.params.id);
}

function addCompany(req) {
  return companiesService.addCompany(req.body);
}

function editCompany(req) {
  return companiesService.editCompany(req.params.id, req.body);
}

function changeCompanyStatus(req) {
  return companiesService.changeCompanyStatus(req.params.id);
}

function getPaginationItems(req) {
  return companiesService.getPaginationItems(req.body);
}

module.exports = {
  getCompanyById: routeUtils.handleResponse(getCompanyById),
  addCompany: routeUtils.handleResponse(addCompany),
  editCompany: routeUtils.handleResponse(editCompany),
  changeCompanyStatus: routeUtils.handleResponse(changeCompanyStatus),
  getPaginationItems: routeUtils.handleResponse(getPaginationItems)
};
