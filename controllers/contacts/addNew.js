const { Contact } = require("../../models");

const addNew = async (req, res) => {
  const { _id: owner } = reg.user;
  const result = await Contact.create({ ...req.body, owner });
  return res.status(201).json(result);
};

module.exports = addNew;
