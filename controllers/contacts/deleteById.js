const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteById = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove({ owner, _id: contactId });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  return res.json({ message: "contact deleted" });
};

module.exports = deleteById;
