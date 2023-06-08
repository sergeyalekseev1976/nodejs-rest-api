const express = require("express");
const ctrl = require("../../controllers/contacts");
const {
  addValid,
  validateBody,
  updateValid,
  updateFavoriteValid,
  isValidId,
} = require("../../helpers");
const authenticate = require("../../middlewares/authenticate");
const {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
} = require("../../models");
const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(addSchema), ctrl.addNew);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  updateValid(updateSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  updateFavoriteValid(updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
