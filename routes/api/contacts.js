const express = require('express');
const ctrl = require('../../controllers/contacts');
const { addValid, updateValid, addSchema, updateSchema} = require('../../helpers');
const router = express.Router()

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", addValid(addSchema), ctrl.addNew);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", updateValid(updateSchema), ctrl.updateById);

module.exports = router;