const Joi = require('joi');

const consignmentNoteSchemaAdd = {
  body: {
    number: Joi.string().trim().min(1).required(),
    wareOwner: Joi.string().required(),
    wares: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      weight: Joi.string().required(),
      amount: Joi.string().required()
    })).required(),
    vehicle: Joi.string().required(),
    driver: Joi.string().required(),
    companyId: Joi.number().required()
  },
  params: {
    id: Joi.string().min(1).optional()
  }
};

module.exports = consignmentNoteSchemaAdd;
