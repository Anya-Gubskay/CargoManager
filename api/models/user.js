module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});

  User.associate = models => {
    User.hasOne(models.userAddress);
    User.hasMany(models.consignmentNote);
    User.belongsToMany(models.userRole, {through: 'userRolesJoin', foreignKey: 'userId'});
  };

  return User;
};
