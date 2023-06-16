const {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
  Contact,
} = require("./contact");
const { User, authSchema, subSchema, emailSchema } = require("./user");

module.exports = {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
  Contact,
  User,
  authSchema,
  subSchema,
  emailSchema
};
