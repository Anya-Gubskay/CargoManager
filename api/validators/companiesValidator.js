const status = require('../const/statusCompany');
const Joi = require('joi');

const companiesSchema = {
  body: {
    name: Joi.string().trim().min(1).required(),
    address: {
      city: Joi.string().trim().min(1).required(),
      street: Joi.string().trim().min(1).required(),
      house: Joi.string().trim().min(1).required(),
      office: Joi.string().allow('').trim().optional()
    },
    contact: Joi.string().trim().min(1).required(),
    email: Joi.string().trim().email().required(),
    phone: Joi.string().trim().required(),
    status: Joi.valid([status.active, status.inactive]).optional(),
    admin: {
      surname: Joi.string().trim().min(1).required(),
      name: Joi.string().trim().min(1).required(),
      patronymic: Joi.string().allow('').trim().min(1).optional(),
      phone: Joi.string().trim().required(),
      email: Joi.string().trim().email().required(),
      username: Joi.string().trim().min(1).required(),
      password: Joi.string().allow('').trim().optional(),
      role: Joi.string().trim().min(1).optional()
    }
  },
  params: {
    id: Joi.string().optional()
  }
};

module.exports = companiesSchema;
