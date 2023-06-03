const express = require('express');
const {validateBody} = require('../../helpers');
const {registerSchema, subSchema} = require('../../models');
const ctrl = require('../../controllers/auth');


const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.registerUser)

module.exports = router;