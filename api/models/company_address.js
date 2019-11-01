module.exports = (sequelize, DataTypes) => {
  const CompanyAddress = sequelize.define('companyAddress', {
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    house: DataTypes.INTEGER,
    office: DataTypes.INTEGER
  }, {});

  CompanyAddress.associate = models => {
  };

  return CompanyAddress;
};
