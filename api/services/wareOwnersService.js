const wareOwnersRepository = require('../repositories/wareOwnersRepository');
const models = require('../models/index');
const errorService = require('./errorService');

class WareOwnersService {
  constructor({wareOwnersRepository}) {
    this.wareOwnersRepository = wareOwnersRepository;
  }

  async getWaresOwners() {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const wareOwner = await wareOwnersRepository.getWaresOwners(transaction);
      await transaction.commit();
      return wareOwner;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async getWareOwnerById(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const wareOwner = await this.wareOwnersRepository.getWareOwnerById(id, transaction);
      await transaction.commit();
      return wareOwner;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async addWareOwner(dataWareOwner) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const wareOwner = await this.wareOwnersRepository.addWareOwner(dataWareOwner, transaction);
      await transaction.commit();
      return wareOwner;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }

  async editWareOwner(id, dataWareOwner) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const wareOwner = await this.wareOwnersRepository.editWareOwner(id, dataWareOwner, transaction);
      await transaction.commit();
      return wareOwner;
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
        await errorService.handleTransactionError(err);
      }
    }
  }

  async deleteWareOwner(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const wareOwner = await this.wareOwnersRepository.deleteWareOwner(id, transaction);
      await transaction.commit();
      return wareOwner;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }

  async getPaginationItems(paginationParam) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const waresOwners = await this.wareOwnersRepository.getPaginationItems(paginationParam, transaction);
      await transaction.commit();
      return waresOwners;
    } catch (err) {
      await transaction.rollback();
    }
  }
}

module.exports = new WareOwnersService({wareOwnersRepository});
