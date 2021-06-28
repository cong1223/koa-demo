//  https://joi.dev/api/?v=17.4.0
const Joi = require('joi');

const print = {
  query: Joi.object({
    name: Joi.string().required()
  })
};

module.exports = {
  print
};
