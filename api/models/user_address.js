module.exports = (sequelize, DataTypes) => {
  const UserAddress = sequelize.define('userAddress', {
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    house: DataTypes.INTEGER,
    office: DataTypes.INTEGER
  }, {});

  UserAddress.associate = models => {
  };

  return UserAddress;
};