const student = module.exports;

student.explore = async function (req, res) {
    res.render('student/studentexplore');
}

student.update = async function (req, res) {
    res.render('student/studentupdate');
}
student.improvement = async function (req, res) {
    res.render('student/studentimprovement');
}
student.updatepage= async function (req, res) {
    res.render('student/student_update_page');
}
student.improvementpage= async function(req,res) {
    res.render('student/student_improvement_page');
}
student.explorepage= async function(req,res) {
    res.render('student/student_explore_page');
}
