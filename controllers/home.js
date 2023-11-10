const home = module.exports;

home.get = async function (req, res) {
    res.render('index', { title: 'Gaurav' });
}
