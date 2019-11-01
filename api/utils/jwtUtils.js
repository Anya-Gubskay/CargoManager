const jwt = require('jsonwebtoken');
const config = require('../config/index');

const signToken = (id, idUser, userRoles, status, companyId) => {
  return jwt.sign(
    {
      sub: id, idUser, userRoles, status, companyId,
      exp: Math.floor(Date.now() / 1000) + parseInt(config.JWT.live),
      iss: config.JWT.issuer,
      aud: config.JWT.audience
    },
    config.JWT.secret);
};

module.exports = { signToken };
