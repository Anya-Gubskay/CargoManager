const consignmentNoteRepository = require('../repositories/consignmentNoteRepository');
const models = require('../models/index');
const errorService = require('./errorService');

class ConsignmentNoteService {
  constructor({consignmentNoteRepository}) {
    this.consignmentNoteRepository = consignmentNoteRepository;
  }

  async getConsignmentNoteById(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const consignmentNote = await this.consignmentNoteRepository.getConsignmentNoteById(id, transaction);
      await transaction.commit();
      return consignmentNote;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async addConsignmentNote(id, dataConsignmentNote) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const consignmentNote = await this.consignmentNoteRepository.addConsignmentNote(id, dataConsignmentNote, transaction);
      await transaction.commit();
      return consignmentNote;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }
  }

  async editConsignmentNote(dataConsignmentNote) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const consignmentNote = await this.consignmentNoteRepository.editConsignmentNote(dataConsignmentNote, transaction);
      await transaction.commit();
      return consignmentNote;
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
      }
    }
  }

  async changeConsignmentNoteStatus(idConsignmentNote) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const statusConsignmentNote = await this.consignmentNoteRepository.putConsignmentNoteStatus(idConsignmentNote, transaction);
      await transaction.commit();
      return statusConsignmentNote;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async getPaginationItems(paginationParam) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const vehicle = await this.consignmentNoteRepository.getPaginationItems(paginationParam, transaction);
      await transaction.commit();
      return vehicle;
    } catch (err) {
      await transaction.rollback();
    }
  }
}

module.exports = new ConsignmentNoteService({consignmentNoteRepository});

