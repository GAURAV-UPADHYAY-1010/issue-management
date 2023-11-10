var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/explore', controllers.authority.explore);
router.get('/update', controllers.authority.update);
router.get('/improvement',controllers.authority.improvement);
router.get('/improvementpage',controllers.authority.improvementpage);
router.get('/explorepage',controllers.authority.explorepage);
router.get('/updatepage',controllers.authority.updatepage);
module.exports = router;
