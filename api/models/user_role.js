module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('userRole', {
    role: DataTypes.STRING
  }, {});

  UserRole.associate = models => {
    UserRole.belongsToMany(models.user, {through: 'userRolesJoin', foreignKey: 'userRoleId'});
  };

  return UserRole;
};