const contacts = require('../models/contacts');
const {HttpError, ctrlWrapper} = require('../helpers');



const getAll = async (__, res) => {
    const allContacts = await contacts.listContacts();
      return res.json(allContacts);
  };
  
  const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);
      if (!result) {
        throw HttpError(404, "Not found");
    }
      return res.json(result);
  };
  
  const addNew = async (req, res) => {
    const result = await contacts.addContact(req.body);
      return res.status(201).json(result);
  };
  
  const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
      if (!result) {
        throw HttpError(404, "Not found");
    }
      return res.json({ message: "contact deleted" });
  };
  
  const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
      if (!result) {
        throw HttpError(404, "Not found");
    }
      return res.json(result);
  };
  
  module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    addNew: ctrlWrapper(addNew),
    deleteById: ctrlWrapper(deleteById),
    updateById: ctrlWrapper(updateById),
  };