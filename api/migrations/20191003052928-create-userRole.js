module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'userRolesJoin',
      {
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        userRoleId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userRolesJoin');
  }
};
