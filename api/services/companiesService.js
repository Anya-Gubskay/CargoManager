const companiesRepository = require('../repositories/companiesRepository');
const models = require('../models/index');
const errorService = require('./errorService');

class CompaniesService {
  constructor({companiesRepository}) {
    this.companiesRepository = companiesRepository;
  }

  async getCompanyById(id) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const companies = await this.companiesRepository.getCompanyById(id, transaction);
      await transaction.commit();
      return companies;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async addCompany(data) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const {admin, ...company} = data;
      const newCompany = await this.companiesRepository.addCompany(company, admin, transaction);
      await transaction.commit();
      return newCompany;
    } catch (err) {
      await transaction.rollback();
      await errorService.handleTransactionError(err);
    }

  }

  async editCompany(id, dataCompany) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const {admin, ...company} = dataCompany;
      const data = await this.companiesRepository.getCompanyById(id);
      const editedCompany = await this.companiesRepository.editCompany(id, company, data.admin.id, admin, transaction);
      await transaction.commit();
      return editedCompany;
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
        await errorService.handleTransactionError(err);
      }
    }
  }

  async changeCompanyStatus(idCompany) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const statusCompany = await this.companiesRepository.putCompanyStatus(idCompany, transaction);
      await transaction.commit();
      return statusCompany;
    } catch (err) {
      await transaction.rollback();
    }
  }

  async getPaginationItems(paginationParam) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const companies = await this.companiesRepository.getPaginationItems(paginationParam, transaction);
      await transaction.commit();
      return companies;
    } catch (err) {
      await transaction.rollback();
    }
  }
}

module.exports = new CompaniesService({companiesRepository});
