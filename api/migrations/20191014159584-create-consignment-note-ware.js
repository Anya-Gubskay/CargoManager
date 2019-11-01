module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consignmentNoteWares', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      consignmentNoteId: {
        type: Sequelize.INTEGER,
        onUpdate: 'cascade'
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
    return queryInterface.dropTable('consignmentNoteWares');
  }
};
