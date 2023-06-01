const express = require('express');
const ctrl = require('../../controllers/contacts');
const { addValid, updateValid, updateFavoriteValid, isValidId } = require('../../helpers');
const {addSchema, updateSchema, updateFavoriteSchema} = require('../../models/contact')
const router = express.Router()

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", addValid(addSchema), ctrl.addNew);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put("/:contactId", isValidId, updateValid(updateSchema), ctrl.updateById);

router.patch("/:contactId/favorite", isValidId, updateFavoriteValid(updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;