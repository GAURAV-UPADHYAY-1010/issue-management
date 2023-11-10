const authPages = module.exports;

authPages.register = async function (req, res) {
    res.render('register');
}


authPages.login = async function (req, res) {
    res.render('login');
}