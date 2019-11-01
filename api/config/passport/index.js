const passport = require('passport');
const jwtStrategy = require('./jwt');

passport.use('jwt', jwtStrategy);
