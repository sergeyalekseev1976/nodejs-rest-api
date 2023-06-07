const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateById = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(
    { owner, _id: contactId },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  return res.json(result);
};

module.exports = updateById;
