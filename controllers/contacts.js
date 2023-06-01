const {Contact} = require('../models/contact')
const {HttpError, ctrlWrapper} = require('../helpers');



const getAll = async (__, res) => {
    const allContacts = await Contact.find();
      return res.json(allContacts);
  };
  
  const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
      if (!result) {
        throw HttpError(404, "Not found");
    }
      return res.json(result);
  };
  
  const addNew = async (req, res) => {
    const result = await Contact.create(req.body);
      return res.status(201).json(result);
  };
  
  const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
      if (!result) {
        throw HttpError(404, "Not found");
    }
      return res.json({ message: "contact deleted" });
  };
  
  const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body);
      if (!result) {
        throw HttpError(404, "Not found");
    }
      return res.json(result);
  };
  
  const updateFavorite = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true, 
    });
  
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
    updateFavorite: ctrlWrapper(updateFavorite),
  };