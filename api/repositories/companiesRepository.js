const Company = require('../models').company;
const User = require('../models').user;
const CompanyAddress = require('../models').companyAddress;
const status = require('../const/statusCompany');
const passwordUtils = require('../utils/passwordUtils');
const UserRole = require('../models').userRole;
const roleUsers = require('../const/roleUsers');
const paginate = require ('../utils/pagination');

class CompaniesRepository {

  async getCompanyById(id, t) {
    const companyItem = await Company.findOne({where: {id},
      include: [
        {attributes: ['city', 'street', 'house', 'office'], model: CompanyAddress},
      ], transaction:t});

    const companyAdmin = await User.findOne({where: {companyId: id},
      include: [{where:{role:roleUsers.companyAdmin}, model: UserRole}], transaction:t});

    const company = companyItem.dataValues;
    const admin = companyAdmin.dataValues;

    return {company, admin};
  }

  async addCompany(dataCompany, dataUser, t) {
    const {address, ...dataCompanyWithoutAddress} = dataCompany;
    const {password, ...dataUserWithoutPassword} = dataUser;

    const company = await Company.create(
      {...dataCompanyWithoutAddress,
        status: status.active,
        companyAddress: {...address}
      },
      {include: [User, CompanyAddress], transaction: t}
    );

    const user =  await User.create(
      {...dataUserWithoutPassword,
        companyId: +company.id,
        password: passwordUtils.generateHash(password)
      }, {transaction: t}
    );

    const roleUser = await UserRole.findOne({where: {role: roleUsers.companyAdmin}}, {transaction: t});

    await user.setUserRoles(roleUser.id, {transaction: t});
    return user;
  };

  async editCompany(id, dataCompany, idAdmin, dataUser, t) {
    const {password, ...dataUserWithoutPassword} = dataUser;

    return Promise.all([
      Company.update(
        {...dataCompany},
        {where: {id: id}, transaction: t},
      ),
      CompanyAddress.update(
        {...dataCompany.address},
        {where: {companyId: id},transaction: t},
      ),
      User.update(
        {...dataUserWithoutPassword},
        {where: {id: idAdmin}, transaction: t}
      ),
      password && User.update(
        {password: passwordUtils.generateHash(password)},
        {where: {id: idAdmin}, transaction: t},
      )
    ]);
  }

  async putCompanyStatus(id, t) {
    const company = await Company.findOne({where: {id: id}, transaction:t});
    const newStatus = (company.status === status.inactive) ? status.active : status.inactive;

    return Company.update(
      {status: newStatus},
      {where: {id}, transaction:t}
    );
  }

  async getPaginationItems(paginationParam, t) {
    const page = paginationParam.p - 1;
    const pageSize = paginationParam.items;

    const companies = await Company.findAll({
        include: [CompanyAddress],
        ...paginate({page, pageSize}),
        order: [['id', 'ASC']],
        transaction:t
      },
    );

    return {
      items: companies,
      total: await Company.count({transaction: t})
    };
  }
}

module.exports = new CompaniesRepository();

