const routeUtils = require('../utils/routeUtils');
const authorizeService = require('../services/authorizeService');

function authenticate(req) {
  const {login, password} = req.body;

  return authorizeService.authenticate(login, password);
}

module.exports = {
  authenticate: routeUtils.handleResponse(authenticate)
};
