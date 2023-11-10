const express = require('express');
const passport = require('passport');
const router = express.Router();
const apiControllers = require('../../controllers/api');
const {validateRegisterationRequest} = require('../../middlewares/validation');

router.post('/register', validateRegisterationRequest, apiControllers.auth.register);
router.post('/login', passport.authenticate('local'), apiControllers.auth.login);

module.exports = router;