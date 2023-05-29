const { addSchema, updateSchema } = require('./schemas')
const HttpError = require('./HttpError');


const addValid = (body) => {
  const { error } = addSchema.validate(body);
  if (error) {
    throw HttpError(400, "missing required name field");
  }
};

const updateValid = (body) => {
  const bodyLength = Object.keys(body).length;
  const { error } = updateSchema.validate(body);
  if (error || !bodyLength) {
    throw HttpError(400, "missing fields");
  }
};

module.exports = {
  addValid,
  updateValid,
};