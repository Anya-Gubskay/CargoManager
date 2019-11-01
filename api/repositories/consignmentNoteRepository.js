const User = require('../models').user;
const UserRole = require('../models').userRole;
const ConsignmentNote = require('../models').consignmentNote;
const ConsignmentNoteWare = require('../models').consignmentNoteWare;
const paginate = require('../utils/pagination');
const status = require('../const/statusConsignmentNote');

class ConsignmentNoteRepository {

  async getConsignmentNoteById(id, t) {
    return ConsignmentNote.findOne({
      where: {id}, attributes: ['id', 'number', 'wareOwner', 'vehicle', 'driver'],
      include: {
        where: {consignmentNoteId: id},
        model: ConsignmentNoteWare
      },
      transaction: t
    })
  }

  async addConsignmentNote(id, dataConsignmentNote, t) {
    const consignmentNote = await ConsignmentNote.create(
      {
        number: dataConsignmentNote.number,
        wareOwner: dataConsignmentNote.wareOwner,
        vehicle: dataConsignmentNote.vehicle,
        driver: dataConsignmentNote.driver,
        userId: id,
        companyId: dataConsignmentNote.companyId,
        status: status.registered
      },
      {transaction: t}
    );

    await ConsignmentNoteWare.bulkCreate(
      await dataConsignmentNote.wares.map(ware =>
        Object.assign({consignmentNoteId: consignmentNote.id}, {...ware})
      ), {transaction: t});


    return consignmentNote;
  }

  async putConsignmentNoteStatus(id, t) {

    return ConsignmentNote.update(
      {status: 'Checked'},
      {where: {id}, transaction: t}
    );
  }

  async editConsignmentNote(dataConsignmentNote, t) {
    const {wares, ...dataConsignmentNoteWithoutWares} = dataConsignmentNote;
    await Promise.all([
        ConsignmentNote.update({
            driver: dataConsignmentNoteWithoutWares.driver,
            vehicle: dataConsignmentNoteWithoutWares.vehicle
          },
          {
            where: {id: dataConsignmentNoteWithoutWares.id}, transaction: t
          }),
        ConsignmentNoteWare.destroy({where: {consignmentNoteId: dataConsignmentNote.id}, transition: t}),
        ConsignmentNoteWare.bulkCreate(
          await wares.map(ware =>
            Object.assign({consignmentNoteId: dataConsignmentNote.id}, {...ware})
          ), {transaction: t})
      ]
    );
    return wares;
  }

  async getPaginationItems(paginationParam, t) {
    const page = paginationParam.p - 1;
    const pageSize = paginationParam.items;

    const consignmentNotes = await ConsignmentNote.findAll({
      where: {companyId: paginationParam.companyId},
      attributes: ['id', 'number', 'wareOwner', 'vehicle', 'driver', 'userId', 'createdAt', 'status'],
      include: [
        {
          attributes: ['name', 'patronymic', 'surname'],
          where: {companyId: paginationParam.companyId},
          include: [
            {
              where: {
                role: ['dispatcher']
              },
              model: UserRole,
            }],
          model: User
        }],
      ...paginate({page, pageSize}),
      order: [['id', 'ASC']],
      transaction: t
    });

    return {
      items: consignmentNotes,
      total: await ConsignmentNote.count({
        where: {companyId: paginationParam.companyId}, transaction: t
      })
    }
  }
}

module.exports = new ConsignmentNoteRepository();
