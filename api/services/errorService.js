const httpErrors = require('http-errors');
const errorMessage = require('../const/errorMessage');

class ErrorService {

  handleTransactionError(err) {
    if (err.parent.table === 'companies') {
      switch (true) {
        case (err.errors[0].message === 'email must be unique'):
          throw new httpErrors.Conflict(errorMessage.companyEmail);
        case (err.errors[0].message === 'name must be unique'):
          throw new httpErrors.Conflict(errorMessage.companyName);
      }
    } else if (err.parent.table === 'users') {
      switch (true) {
        case (err.errors[0].message === 'username must be unique'):
          throw new httpErrors.Conflict(errorMessage.userLogin);
        case (err.errors[0].message === 'email must be unique'):
          throw new httpErrors.Conflict(errorMessage.userEmail);
      }
    } else if (err.parent.table === 'wareOwners') {
      switch (true) {
        case (err.errors[0].message === 'name must be unique'):
          throw new httpErrors.Conflict(errorMessage.wareOwnerName);
        case (err.errors[0].message === 'email must be unique'):
          throw new httpErrors.Conflict(errorMessage.wareOwnerEmail);
      }
    } else if (err.parent.table === 'companyVehicles') {
      throw new httpErrors.Conflict(errorMessage.vehicleNumber);
    } else if (err.parent.table === 'consignmentNotes') {
      throw new httpErrors.Conflict(errorMessage.consignmentNoteNumber);
    } else if (err.parent.table === 'warehouses') {
      throw new httpErrors.Conflict(errorMessage.warehouseName);
    }
  }
}

module.exports = new ErrorService;
