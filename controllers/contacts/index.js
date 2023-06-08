const { ctrlWrapper } = require("../../helpers");
const getAll = require("./getAll");
const getById = require("./getById");
const addNew = require("./addNew");
const deleteById = require("./deleteById");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addNew: ctrlWrapper(addNew),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
