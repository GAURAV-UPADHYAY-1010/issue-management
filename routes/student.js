var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/explore', controllers.student.explore);
router.get('/update', controllers.student.update);
router.get('/improvement',controllers.student.improvement);
router.get('/improvementpage',controllers.student.improvementpage);
router.get('/explorepage',controllers.student.explorepage);
router.get('/updatepage',controllers.student.updatepage);

module.exports = router;


