const {User} = require('../../models');
const {ctrlWrapper} = require('../../helpers')

const registerUser = async(req, res) => {
    const newUser = await User.create(req.body);
    return res.status(201).json(newUser);
}
module.exports = registerUser;