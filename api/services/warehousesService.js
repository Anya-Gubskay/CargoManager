const warehousesRepository = require('../repositories/warehousesRepository');
const models = require('../models/index');
const errorService = require('./errorService');

class WarehousesService {
  constructor({warehousesRepository}) {
    this.warehousesRepository = warehousesRepository;
  }

  async getPaginationItems(paginationParam) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const warehouses = await this.warehousesRepository.getPaginationItems(paginationParam, transaction);
      await transaction.commit();
      return warehouses;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async getWarehouseById(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const warehouses = await this.warehousesRepository.getWarehouseById(id, transaction);
      await transaction.commit();
      return warehouses;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async addWarehouse(dataWarehouse) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const warehouse = await this.warehousesRepository.addWarehouse(dataWarehouse, transaction);
      await transaction.commit();
      return warehouse;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }

  async editWarehouse(id, dataWarehouse) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const warehouse = await this.warehousesRepository.editWarehouse(id, dataWarehouse, transaction);
      await transaction.commit();
      return warehouse;
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
        await errorService.handleTransactionError(err);
      }
    }
  }

  async deleteWarehouse(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const vehicle = await this.warehousesRepository.deleteWarehouse(id, transaction);
      await transaction.commit();
      return vehicle;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }
}

module.exports = new WarehousesService({warehousesRepository});
