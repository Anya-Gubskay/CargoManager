const Joi = require('joi');

const waresOwnersSchema = {
  body: {
    name: Joi.string().trim().min(1).required(),
    phone: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().min(4).required(),
    address: {
      city: Joi.string().trim().min(1).required(),
      street: Joi.string().trim().min(1).required(),
      house: Joi.string().trim().min(1).required(),
      office: Joi.string().allow('').trim().optional()
    }
  },
  params: {
    id: Joi.string().min(1).optional()
  }
};

module.exports = waresOwnersSchema;
