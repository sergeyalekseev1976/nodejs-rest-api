const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateSubscription;
