const {Contact} = require('../../models');

  const addNew = async (req, res) => {
    const result = await Contact.create(req.body);
      return res.status(201).json(result);
  };

  module.exports = addNew;
  