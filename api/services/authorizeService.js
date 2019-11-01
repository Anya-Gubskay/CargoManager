const httpErrors = require('http-errors');
const jwtUtils = require('../utils/jwtUtils');
const usersRepository = require('../repositories/usersRepository');
const passwordUtils = require('../utils/passwordUtils');
const ErrorMesssage = require('../const/errorMessage');

class AuthService {
  constructor({usersRepository}) {
    this.usersRepository = usersRepository;
  }

  async authenticate(login, password) {
    const user = await this.usersRepository.getUser(login, password);

    this._checkUser(user, password, login);

    const userWithStatusCompany = await this.usersRepository.getStatusCompany(user);
    const token = jwtUtils.signToken(userWithStatusCompany.id, user.id, userWithStatusCompany.userRoles, userWithStatusCompany.statusCompany, userWithStatusCompany.companyId);

    return {token};
  }

  _checkUser(user, password, login) {
    switch (true) {
      case (!user):
        throw new httpErrors.Unauthorized(ErrorMesssage.noLoginAndPassword);

      case (user.username !== login):
        throw new httpErrors.Unauthorized(ErrorMesssage.noLogin);

      case (!passwordUtils.isPasswordValid(password, user.password)):
        throw new httpErrors.Unauthorized(ErrorMesssage.noPassword);
    }
  }
}

module.exports = new AuthService({usersRepository});
