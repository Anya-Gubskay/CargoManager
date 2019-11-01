module.exports = (sequelize, DataTypes) => {
  const WareOwner = sequelize.define('wareOwner', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  WareOwner.associate = models => {
    WareOwner.hasOne(models.wareOwnerAddress);
  };
  return WareOwner;
};
