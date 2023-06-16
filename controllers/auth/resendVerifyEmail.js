const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");
const { PROJECT_URL } = process.env;
const { nanoid } = require("nanoid");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const verificationToken = nanoid();

  if (!user) {
    throw HttpError(404, "Email not found");
  }
  if (user.verify) {
    throw HttpError(404, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${PROJECT_URL}/api/users/verify/${verificationToken}">Please verify your email</a>`,
  };
  await sendEmail(verifyEmail);

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
