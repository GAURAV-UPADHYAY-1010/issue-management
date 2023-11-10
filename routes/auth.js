var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/register', controllers.register);
router.get('/login', controllers.login);
module.exports = router;
