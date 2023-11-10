const User = require('../../models/user');
const passport = require('passport');
const {authentication} = require('../../middlewares');

const authController = module.exports;

authController.register = async function (req, res) {
    let {email, firstname, lastname, password, acceptedTerms,username,userType} = req.body;
    
    User.register(new User({username: username}), password, async (err, user) => {
        if (err){
          res.status(400).json({success: false, message: err.message})
        }
        else {
            user.email = email;
            user.firstname = firstname;
            user.lastname = lastname;
            user.acceptedTerms = acceptedTerms;
            user.username= username;
            user.userType= userType;
            await user.save();
            
            passport.authenticate('local')(req, res, () => {
              res.status(200).json({success: true, message: 'You have successfully signed up!'});
            });
          }
        });
    }

authController.login = (req, res, next) => {
    let token = authentication.getToken({_id: req.user._id});
    res.cookie('token', token,  { expiresIn: '10d' })
    res.status(200).json({success: true, token: token, message: 'You have successfully logged in!'});
}