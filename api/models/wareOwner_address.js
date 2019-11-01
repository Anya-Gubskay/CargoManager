module.exports = (sequelize, DataTypes) => {
  const WareOwnerAddress = sequelize.define('wareOwnerAddress', {
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    house: DataTypes.INTEGER,
    office: DataTypes.INTEGER
  }, {});

  WareOwnerAddress.associate = models => {
  };

  return WareOwnerAddress;
};
