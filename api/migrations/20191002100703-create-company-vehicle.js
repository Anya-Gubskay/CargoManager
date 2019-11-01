module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('companyVehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      numberAuto: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      consumption: {
        type: Sequelize.STRING
      },
      bodyType: {
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
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companyVehicles');
  }
};
