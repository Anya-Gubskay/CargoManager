const Joi = require('joi');

const consignmentNoteSchemaEdit = {
  body: {
    id: Joi.number().required(),
    wares: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      weight: Joi.string().required(),
      amount: Joi.string().required()
    })).required(),
    vehicle: Joi.string().required(),
    driver: Joi.string().required()
  },

  params: {
    id: Joi.string().min(1).optional()
  }
};

module.exports = consignmentNoteSchemaEdit;
