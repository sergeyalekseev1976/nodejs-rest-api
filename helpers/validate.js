const HttpError = require('./HttpError');


const addValid = schema => {
  const func = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing required name field");
  }
  next();
};
return func;
};

const updateValid = schema => {
  const func = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing fields");
  }
  next();
};
return func;
};

module.exports = {
  addValid,
  updateValid,
};