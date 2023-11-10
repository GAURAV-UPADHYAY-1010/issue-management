var express = require('express');
var router = express.Router();
var controllers = require('../controllers');


router.get('/explore', controllers.faculty.explore);
router.get('/update', controllers.faculty.update);
router.get('/improvement',controllers.faculty.improvement);
router.get('/improvementpage',controllers.faculty.improvementpage);
router.get('/explorepage',controllers.faculty.explorepage);
router.get('/updatepage',controllers.faculty.updatepage);
module.exports = router;


