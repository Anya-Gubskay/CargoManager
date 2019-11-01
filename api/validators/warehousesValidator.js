const Joi = require('joi');

const warehousesSchema = {
  body: {
    warehouseName: Joi.string().trim().min(1).required(),
    address: Joi.string().trim().min(1).required(),
    phone: Joi.string().trim().required()
  },
  params: {
    id: Joi.string().optional()
  }
};

module.exports = warehousesSchema;