module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consignmentNotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      wareOwner: {
        type: Sequelize.STRING
      },
      vehicle: {
        type: Sequelize.STRING
      },
      driver: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'cascade'
      },
      companyId: {
        type: Sequelize.INTEGER,
        onUpdate: 'cascade'
      },
      status: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('consignmentNotes');
  }
};