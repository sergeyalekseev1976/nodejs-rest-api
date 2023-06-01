const {Contact} = require('../../models')
const {HttpError} = require('../../helpers');
  
  const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body);
      if (!result) {
        throw HttpError(404, "Not found");
    }
      return res.json(result);
  };

  module.exports = updateById;