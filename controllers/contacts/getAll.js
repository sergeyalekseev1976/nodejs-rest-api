const {Contact} = require('../../models')


const getAll = async (__, res) => {
    const allContacts = await Contact.find();
      return res.json(allContacts);
  };

  module.exports = getAll;