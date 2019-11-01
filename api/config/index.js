module.exports = {
  JWT: {
    secret: process.env.SECRET_JWT,
    issuer: process.env.ISSUER,
    audience: process.env.AUDIENCE,
    live: process.env.JWT_LIVE
  }
};
