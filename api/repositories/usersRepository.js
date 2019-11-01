const User = require('../models').user;
const Company = require('../models').company;
const UserAddress = require('../models').userAddress;
const UserRole = require('../models').userRole;
const passwordUtils = require('../utils/passwordUtils');
const paginate = require('../utils/pagination');

class UsersRepository {

  async getUser(login, password) {
    let users = await User.findAll({
      include: [
        {attributes: ['role'], model: UserRole},
      ]
    });
    return users.find(user => (user.username === login || passwordUtils.isPasswordValid(password, user.password)));
  }

  async getStatusCompany(user) {
    const statusCompany = await Company.findOne({
      attributes: ['status'],
      where: {id: user.companyId}
    });
    statusCompany && (user.statusCompany = statusCompany.status);
    return user;
  }

  async getUserById(id, t) {
    return User.findOne({
      where: {id: id},
      attributes: {exclude: 'password'},
      include: [
        {attributes: ['id', 'role'], model: UserRole},
        {attributes: ['city', 'street', 'house', 'office'], model: UserAddress},
      ],
      transaction: t
    });
  }

  async addUser(dataUser, t) {
    const {role, password, ...dataUserWithoutRolesPassword} = dataUser;

    const user = await User.create(
      {
        ...dataUserWithoutRolesPassword,
        password: passwordUtils.generateHash(password),
        userAddress: {...dataUser.address}
      },
      {include: [UserAddress], transaction: t}
    );
    await user.setUserRoles(role.map(role => role.id), {transaction: t});
    return user;
  }

  async editUser(id, dataUser, t) {
    const {role, password, ...dataUserWithoutRoles} = dataUser;

    await Promise.all([
      User.update(
        {...dataUserWithoutRoles},
        {where: {id: id}, transaction: t}
      ),
      UserAddress.update(
        {...dataUser.address},
        {where: {userId: id}, transaction: t}
      ),
      password && User.update(
        {password: passwordUtils.generateHash(password)},
        {where: {id: id}, transaction: t},
      )
    ]);
    const user = await this.getUserById(id);

    await user.setUserRoles(role.map(role => role.id), {transaction: t});
    return user;
  }

  async deleteUser(id, t) {
    const user = await this.getUserById(id);

    await Promise.all([
      user.removeUserRoles(user.dataValues.userRoles.map(role => role.dataValues.id), {transaction: t}),
      User.destroy({
        where: {id: id}, transaction: t
      }),
      UserAddress.destroy({
        where: {userId: id}, transaction: t
      })
    ]);
    return user;
  }

  async getPaginationItems(paginationParam, t) {
    const page = paginationParam.p - 1;
    const pageSize = paginationParam.items;
    const users = await User.findAll({
      where: {companyId: paginationParam.companyId},
      attributes: ['id', 'name', 'surname', 'patronymic', 'username'],
      include: [
        {
          attributes: ['id', 'role'],
          where: {
            role: [
              'dispatcher',
              'manager',
              'driver']
          },
          model: UserRole
        }],
      ...paginate({page, pageSize}),
      order: [['id', 'ASC']],
      transaction: t
    });

    return {
      items: users,
      total: await User.count({
        where: {companyId: paginationParam.companyId},
        distinct: ['User.id'],
        include: [
          {
            where: {
              role: [
                'dispatcher',
                'manager',
                'driver']
            },
            model: UserRole
          }],
        transaction: t
      })
    }
  }

  async getDriversByCompanyId(id, t) {
    return User.findAll({
      attributes: ['name', 'surname', 'patronymic'],
      include: [
        {attributes: ['id', 'role'], where: {role: ['driver']}, model: UserRole},
      ],
      where: {companyId: id},
      order: [['id', 'ASC']]
    }, {transaction: t});
  }
}

module.exports = new UsersRepository();
