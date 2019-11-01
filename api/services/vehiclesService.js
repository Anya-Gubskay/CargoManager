const vehiclesRepository = require('../repositories/vehiclesRepository');
const models = require('../models/index');
const errorService = require('./errorService');

class VehiclesService {
  constructor({vehiclesRepository}) {
    this.vehiclesRepository = vehiclesRepository;
  }

  async getVehicleById(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const vehicle = await this.vehiclesRepository.getVehicleById(id, transaction);
      await transaction.commit();
      return vehicle;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async addVehicle(dataVehicle, companyId) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const vehicle = await this.vehiclesRepository.addVehicle(dataVehicle, companyId, transaction);
      await transaction.commit();
      return vehicle;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }

  async editVehicle(id, dataVehicle) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const vehicle = await this.vehiclesRepository.editVehicle(id, dataVehicle, transaction);
      await transaction.commit();
      return vehicle;
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
        await errorService.handleTransactionError(err);
      }
    }
  }

  async deleteVehicle(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const vehicle = await this.vehiclesRepository.deleteVehicle(id, transaction);
      await transaction.commit();
      return vehicle;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }

  async getPaginationItems(paginationParam, id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const vehicle = await this.vehiclesRepository.getPaginationItems(paginationParam, id, transaction);
      await transaction.commit();
      return vehicle;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async getVehiclesByCompanyId(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const vehicle = await vehiclesRepository.getVehiclesByCompanyId(id, transaction);
      await transaction.commit();
      return vehicle;
    } catch (err) {
      await transaction.rollback();
    }
  }
}

module.exports = new VehiclesService({vehiclesRepository});
