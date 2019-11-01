module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('companyAddresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      house: {
        type: Sequelize.STRING
      },
      office: {
        type: Sequelize.STRING
      },
      companyId: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('companyAddresses');
  }
};
