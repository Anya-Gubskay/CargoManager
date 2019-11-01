module.exports = (sequelize, DataTypes) => {
  const ConsignmentNote = sequelize.define('consignmentNote', {
    number: DataTypes.STRING,
    wareOwner: DataTypes.STRING,
    vehicle: DataTypes.STRING,
    driver: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});

  ConsignmentNote.associate = models => {
    ConsignmentNote.hasMany(models.consignmentNoteWare);
    ConsignmentNote.belongsTo(models.user);
  };

  return ConsignmentNote;
};
