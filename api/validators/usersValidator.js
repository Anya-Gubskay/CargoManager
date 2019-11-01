const Joi = require('joi');

const usersSchema = {
  body: {
    surname: Joi.string().trim().min(1).required(),
    name: Joi.string().trim().min(1).required(),
    patronymic: Joi.string().allow('').trim().min(1).required(),
    email: Joi.string().trim().min(4).required(),
    phone: Joi.string().trim().required(),
    role: Joi.array().items(Joi.object({
      id: Joi.number().required(),
      role: Joi.string().required(),
      userRolesJoin: Joi.object().optional()
    })).required(),
    address: {
      city: Joi.string().trim().min(1).required(),
      street: Joi.string().trim().min(1).required(),
      house: Joi.string().trim().min(1).required(),
      office: Joi.string().allow('').trim().optional()
    },
    companyId: Joi.number().optional(),
    username: Joi.string().trim().min(1).required(),
    password: Joi.string().allow('').trim().optional(),
    dateOfBirth: Joi.string().allow('').trim().min(8).optional()
  },
  params: {
    id: Joi.string().min(1).optional()
  }
};

module.exports = usersSchema;
