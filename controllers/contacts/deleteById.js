const {Contact} = require('../../models');
const {HttpError} = require('../../helpers');

  const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
      if (!result) {
        throw HttpError(404, "Not found");
    }
      return res.json({ message: "contact deleted" });
  };

  module.exports = deleteById;