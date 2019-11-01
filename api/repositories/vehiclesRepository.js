const CompanyVehicle = require('../models').companyVehicle;
const paginate = require('../utils/pagination');
const Company = require('../models').company;

class VehiclesRepository {

  async getVehicleById(id, t) {
    return CompanyVehicle.findOne({where: {id}, transaction: t});
  }

  async addVehicle(dataVehicle, companyId, t) {

    return CompanyVehicle.create(
      {
        ...dataVehicle,
        companyId
      },
      {transaction: t}
    );
  }

  async editVehicle(id, dataVehicle, t) {
    return CompanyVehicle.update(
      {...dataVehicle},
      {where: {id}, transaction: t});
  }

  async deleteVehicle(id, t) {
    return CompanyVehicle.destroy({where: {id}, transaction: t});
  }

  async getPaginationItems(paginationParam, companyId, t) {
    const page = paginationParam.p - 1;
    const pageSize = paginationParam.items;

    const vehicle = await CompanyVehicle.findAll({
      ...paginate({page, pageSize}),
      where: {companyId},
      order: [['id', 'ASC']],
      transaction: t
    });

    return {
      items: vehicle,
      total: await CompanyVehicle.count({where: {companyId}, transaction: t})
    }
  }

  async getVehiclesByCompanyId(id, t) {
    const companyById = await Company.findAll({
      attributes: ['id'],
      include: [{attributes: ['model', 'numberAuto'], model: CompanyVehicle}],
      where: {id},
      order: [['id', 'ASC']],
      transaction: t
    });
    return companyById[0].companyVehicles
  }
}

module.exports = new VehiclesRepository();
