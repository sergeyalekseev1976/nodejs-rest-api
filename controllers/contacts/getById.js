const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findOne({ owner, _id: contactId });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  return res.json(result);
};

module.exports = getById;
