const authority = module.exports;

authority.explore = async function (req, res) {
    res.render('authority/authorityexplore');
}

authority.update = async function (req, res) {
    res.render('authority/authorityupdate');
}
authority.improvement = async function (req, res) {
    res.render('authority/authorityimprovement');
}
authority.updatepage= async function (req, res) {
    res.render('authority/authority_update_page');
}
authority.improvementpage= async function(req,res) {
    res.render('authority/authority_improvement_page');
}
authority.explorepage= async function(req,res) {
    res.render('authority/authority_explore_page');
}
