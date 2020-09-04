const centersRepo = require('../models/Centers');

const centerController = new Object;
centerController.showAll = async () => {
    try{
        let centers = await centersRepo.find({});
        return centers.length ? centers : {message: "No users found!"};
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No centers found!"};
        }
    }
}
centerController.showById = async (id) => {
    try{
        let center = await centersRepo.findById(id);
        return center;
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No centers found!"}
        }
    }
}
centerController.showByName = async (name) => {
    try{
        let centers = await centersRepo.find({name_l: name.toLowerCase()});
        return centers.length ? centers : {message: "No centers found!"};
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No centers found!"};
        }
    }
}
centerController.showByLocation = async (location) => {
    try{
        let centers_l = await centersRepo.find({location_l: location.toLowerCase()});
        return centers.length ? centers : {message: "No centers found!"};
    }catch(err){
        if(err){
            console.log(err);
            return {message: "No centers found!"};
        }
    }
}
centerController.addNew = async (data) => {
    try{
        let centers = await centerController.showByName(data.name);
        let centers_location = await centerController.showByLocation(data.location);
        centers = centers.concat(centers_location);
        if(centers.length)
            return({message: "This center already exists in our database."});
        else{
            let reg = new centersRepo(data);
            let saved = await reg.save();
            return({message: "Center added successfully!"});
        }
    }catch(err){
        if(err){
            console.log(err);
            return {message: "Oops! Wrong data."};
        }
    }
}
centerController.update = async (data) => {
    try{
        let center = await centersRepo.findByIdAndUpdate(data.id,data);
        return({message: "Center has been updated!"});
    }catch(err){
        if(err){
            console.log(err);
            return {message: "Oops! Wrong data."};
        }
    }
}
centerController.del = async (id) => {
    try{
        let removed = await centersRepo.findByIdAndDelete(id);
    }catch(err){
        if(err){
            console.log(err);
            return {message: "Oops! Wrong data."};
        }
    }
    
}

module.exports = centerController;