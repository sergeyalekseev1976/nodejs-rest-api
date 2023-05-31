const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, __, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(400, `Id:"${contactId}" is not valid`));
  }
  next();
};

module.exports = isValidId;