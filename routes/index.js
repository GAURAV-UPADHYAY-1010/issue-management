var express = require('express');
var router = express.Router();
var controllers = require('../controllers')
var authorityRoutes = require('./authority');
var facultyRoutes = require('./faculty');
var studentRoutes = require('./student');
var apiRouter = require('./api');


// Mounting the API Router
router.use('/api', apiRouter);

/* GET home page. */
router.get('/', controllers.home.get);

/** Registeration route */
router.get('/register', controllers.auth.register);
router.get('/login', controllers.auth.login);

/** Authority pages will go to a different file */
router.use("/authority", authorityRoutes)
router.use("/faculty", facultyRoutes)
router.use("/student", studentRoutes)

/** Handling the routes that are not found */
router.get('/*', function (req, res) {
    res.render('404');
})

module.exports = router;
