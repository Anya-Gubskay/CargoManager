module.exports = (sequelize, DataTypes) => {
  const ConsignmentNoteWare = sequelize.define('consignmentNoteWare', {
    name: DataTypes.STRING,
    weight: DataTypes.STRING,
    amount: DataTypes.STRING
  }, {});

  ConsignmentNoteWare.associate = models => {};

  return ConsignmentNoteWare;
};
