const teachersRepo = require('../models/Teachers');

const teacherController = new Object; 
teacherController.showAll = async () => {
    try{
        let teachers = await teachersRepo.find({});
        return teachers.length ? teachers : {message: "No teachers found!"};
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No teachers found!"};
        }
    }
}
teacherController.showById = async (id) => {
    try{
        let teacher = await teachersRepo.findById(id);
        return teacher;
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No teachers found!"}
        }
    }
}
teacherController.showByName = async (name) => {
    try{
        let teachers = await teachersRepo.find({name_l: name.toLowerCase()});
        return teachers.length ? teachers : {message: "No teachers found!"};
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No teachers found!"};
        }
    }
}
teacherController.showByCourse = async (course) => {
    try{
        let teachers = await teachersRepo.find({course_l: course.toLowerCase()});
        return teachers.length ? teachers : {message: "No teachers found!"};
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No teachers found!"};
        }
    }
}


module.exports = teacherController;