const usersRepository = require('../repositories/usersRepository');
const httpErrors = require('http-errors');
const errorMessage = require('../const/errorMessage');
const models = require('../models/index');
const errorService = require('./errorService');


class UsersService {
  constructor({usersRepository}) {
    this.usersRepository = usersRepository;
  }

  async getUserById(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const users = await this.usersRepository.getUserById(id, transaction);
      await transaction.commit();
      return users;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async find(id) {
    const user = await this.usersRepository.getUserById(id);

    if (!user) {
      throw  new httpErrors.NotFound(errorMessage.userNotfound);
    }

    return this._removeSensitiveInfo(user);
  }

  async deleteUser(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const user = await this.usersRepository.deleteUser(id, transaction);
      await transaction.commit();
      return user;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }

  async addUser(dataUser) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const user = await this.usersRepository.addUser(dataUser, transaction);
      await transaction.commit();
      return user;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }

  async editUser(id, dataUser) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const user = await this.usersRepository.editUser(id, dataUser, transaction);
      await transaction.commit();
      return user;
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
        await errorService.handleTransactionError(err);
      }
    }
  }

  _removeSensitiveInfo(user) {
    const {password, ...secureUser} = user;
    return secureUser;
  }

  async getPaginationItems(paginationParam) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const users = await this.usersRepository.getPaginationItems(paginationParam, transaction);
      await transaction.commit();
      return users;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async getDriversByCompanyId(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const drivers = await this.usersRepository.getDriversByCompanyId(id, transaction);
      await transaction.commit();
      return drivers
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
        await errorService.handleTransactionError(err);
      }
    }
  }
}

module.exports = new UsersService({usersRepository});
