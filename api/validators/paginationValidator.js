const Joi = require('joi');

const paginationSchema = {

  body: {
    p: Joi.number().optional(),
    items: Joi.number().max(100).required(),
    companyId: Joi.number().optional()
  }
};

module.exports = paginationSchema;
