const usersRepo = require('../models/Users');

const userController = new Object;
userController.showAll = async () => {
    try{
        let users = await usersRepo.find({});
        return users.length ? users : {message: "No users found!"};
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No users found!"};
        }
    }
}
userController.showById = async (id) => {
    try{
        let user = await usersRepo.findById(id);
        return user;
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No users found!"}
        }
    }
}
userController.showByName = async (name) => {
    try{
        let users = await usersRepo.find({name_l: name.toLowerCase()});
        return users.length ? users : {message: "No users found!"};
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No users found!"};
        }
    }
    
}
userController.register = async (data) => {
    try{
        let users = await usersRepo.find({name_l: data.name.toLowerCase()});
        if(users.length)
            return({message: "Username is already taken :( please try a different username."});
        else{
            let reg = new usersRepo(data);
            let saved = await reg.save();
            return({message: "User added successfully!"});
        }
    }catch(err){
        if(err){
            console.log(err);
            return {message: "Oops! Wrong data."};
        }
    }
}
userController.update = async (data) => {
    try{
        let user = await usersRepo.findByIdAndUpdate(data.id,data);
        return({message: "User has been updated!"});
        
    }catch(err){
        if(err){
            console.log(err);
            return {message: "Oops! Wrong data."};
        }
    }
}


module.exports = userController;