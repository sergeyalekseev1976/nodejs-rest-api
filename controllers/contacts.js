const contacts = require('../models/contacts');
const {nanoid} = require('nanoid')
const {HttpError, ctrlWrapper, addValid, updateValid} = require('../helpers');



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
    addValid(req.body);
  const newContact = { id: nanoid(), ...req.body };
  const result = await contacts.addContact(newContact);
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
    updateValid(req.body);
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
      if (!result) {
        throw HttpError(404, "Not found").end();
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