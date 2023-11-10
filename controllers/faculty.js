const faculty = module.exports;

faculty.explore = async function (req, res) {
    res.render('faculty/facultyexplore');
}

faculty.update = async function (req, res) {
    res.render('faculty/facultyupdate');
}
faculty.improvement = async function (req, res) {
    res.render('faculty/facultyimprovement');
}
faculty.updatepage= async function (req, res) {
    res.render('faculty/faculty_update_page');
}
faculty.improvementpage= async function(req,res) {
    res.render('faculty/faculty_improvement_page');
}
faculty.explorepage= async function(req,res) {
    res.render('faculty/faculty_explore_page');
}
