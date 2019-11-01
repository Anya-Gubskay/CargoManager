module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('warehouse', {
    warehouseName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});

  Warehouse.associate = models => {
  };
  return Warehouse;
};
