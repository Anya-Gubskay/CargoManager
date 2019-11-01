module.exports = (sequelize, DataTypes) => {
  const CompanyVehicle = sequelize.define('companyVehicle', {
    model: DataTypes.STRING,
    numberAuto: DataTypes.STRING,
    consumption: DataTypes.STRING,
    bodyType: DataTypes.STRING
  }, {});

  CompanyVehicle.associate = models => {

  };
  return CompanyVehicle;
};
