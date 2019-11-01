module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});

  Company.associate = models => {
    Company.hasOne(models.companyAddress);
    Company.hasMany(models.user);
    Company.hasMany(models.consignmentNote);
    Company.hasMany(models.companyVehicle);
  };

  return Company;
};
