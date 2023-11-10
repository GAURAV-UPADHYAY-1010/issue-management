var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    fullname: {
        type: String,
        default: '',
    },
    
    username: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    acceptedTerms: {
        type: Boolean,
        default: false
    },
    userType: {
        type: String,
        enum : ['student', 'authority', 'faculty'],
        default: 'student',
        required: true,
    },
});

User.plugin(passportLocalMongoose, { usernameQueryFields: ['email', 'username'] });

module.exports = mongoose.model('User', User);