const Joi = require('joi');

const vehiclesSchema = {
  body: {
    model: Joi.string().trim().min(1).required(),
    numberAuto: Joi.string().trim().min(1).required(),
    consumption: Joi.string().trim().min(1).required(),
    bodyType: Joi.string().trim().min(1).required(),
  },
  params: {
    id: Joi.string().optional()
  }
};

module.exports = vehiclesSchema;
