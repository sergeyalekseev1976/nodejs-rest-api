const { ctrlWrapper } = require("../../helpers");
const register = require("./registerUser");
const login = require("./loginUser");
const getCurrent = require("./getCurrent");
const logout = require("./logoutUser");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verify = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
  register: ctrlWrapper(register),
  verify: ctrlWrapper(verify),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
