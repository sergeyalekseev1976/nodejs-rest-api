const express = require("express");
const { validateBody, authenticate } = require("../../helpers");
const { authSchema, subSchema } = require("../../models");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(authSchema), ctrl.register);
router.post("/login", validateBody(authSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/",
  authenticate,
  validateBody(subSchema),
  ctrl.updateSubscription
);

module.exports = router;
