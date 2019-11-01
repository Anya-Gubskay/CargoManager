const Warehouse = require('../models').warehouse;
const paginate = require('../utils/pagination');

class WarehousesRepository {

  async addWarehouse(dataWarehouse, t) {
    await Warehouse.create({
      ...dataWarehouse
    }, {transaction: t});

    return dataWarehouse;
  }

  async getWarehouseById(id, t) {
    const warehouseItem = await Warehouse.findOne({where: {id}, transaction: t});
    return warehouseItem.dataValues
  }

  async editWarehouse(id, dataWarehouse, t) {
    return Warehouse.update(
      {...dataWarehouse},
      {where: {id}, transaction: t});
  }

  async deleteWarehouse(id, t) {
    return Warehouse.destroy({where: {id}, transaction: t});
  }

  async getPaginationItems(paginationParam, t) {
    const page = paginationParam.p - 1;
    const pageSize = paginationParam.items;

    const warehouses = await Warehouse.findAll({
        ...paginate({page, pageSize}),
        order: [['id', 'ASC']],
        transaction: t
      },
    );

    return {
      items: warehouses,
      total: await Warehouse.count({transaction: t})
    };
  }
}

module.exports = new WarehousesRepository();