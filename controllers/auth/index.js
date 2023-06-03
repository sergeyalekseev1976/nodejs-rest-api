const registerUser = require('./registerUser');
const {ctrlWrapper} = require('../../helpers');



module.exports = {registerUser: ctrlWrapper(registerUser),}