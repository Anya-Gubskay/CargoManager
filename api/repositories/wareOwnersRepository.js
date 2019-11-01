const WareOwner = require('../models').wareOwner;
const WareOwnerAddress = require('../models').wareOwnerAddress;
const paginate = require('../utils/pagination');

class WareOwnersRepository {

  async getWaresOwners(t) {
    return WareOwner.findAll({attributes: ['name'], transaction: t})
  }

  async getWareOwnerById(id, t) {
    return WareOwner.findOne({
      where: {id},
      include: [
        {attributes: ['city', 'street', 'house', 'office'], model: WareOwnerAddress},
      ],
      transaction: t
    });
  }

  async addWareOwner(dataWareOwner, t) {
    return WareOwner.create(
      {
        ...dataWareOwner,
        wareOwnerAddress: {...dataWareOwner.address}
      },
      {include: [WareOwnerAddress], transaction: t}
    );
  }

  async editWareOwner(id, dataWareOwner, t) {
    return Promise.all([
      WareOwner.update(
        {...dataWareOwner},
        {where: {id}, transaction: t}
      ),
      WareOwnerAddress.update(
        {...dataWareOwner.address},
        {where: {wareOwnerId: id}, transaction: t}
      )
    ]);
  }

  async deleteWareOwner(id, t) {
    return Promise.all([
      WareOwner.destroy({
        where: {id: id}, transaction: t
      }),
      WareOwnerAddress.destroy({
        where: {wareOwnerId: id}, transaction: t
      })
    ]);
  }

  async getPaginationItems(paginationParam, t) {
    const page = paginationParam.p - 1;
    const pageSize = paginationParam.items;

    const waresOwners = await Promise.all([
      WareOwner.findAll({
          include: [WareOwnerAddress],
          ...paginate({page, pageSize}),
          order: [['id', 'ASC']],
          transaction: t
        },
      ),
      WareOwner.count({transaction: t})
    ]);

    return {
      items: waresOwners[0],
      total: waresOwners[1]
    };
  }
}

module.exports = new WareOwnersRepository();

