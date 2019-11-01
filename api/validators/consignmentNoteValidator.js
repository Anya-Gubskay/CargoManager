const Joi = require('joi');

const consignmentNoteSchema = {
  body: {
    number: Joi.string().trim().min(1).required(),
    wareOwner: Joi.array().items(Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required()
    })).required(),
    wares: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      weight: Joi.string().required(),
      amount: Joi.string().required()
    })).required(),
    vehicle: Joi.array().items(Joi.object({
      id: Joi.number().required(),
      fullName: Joi.string().required()
    })).required(),
    driver: Joi.array().items(Joi.object({
      id: Joi.number().required(),
      fullName: Joi.string().required()
    })).required(),
    companyId: Joi.number().required()
  },
  params: {
    id: Joi.string().min(1).optional()
  }
};

module.exports = consignmentNoteSchema;
