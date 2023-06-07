const { ctrlWrapper } = require("../../helpers");
const register = require("./registerUser");
const login = require("./loginUser");
const getCurrent = require("./getCurrent");
const logout = require("./logoutUser");
const updateSubscription = require("./updateSubscription");
module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
};
