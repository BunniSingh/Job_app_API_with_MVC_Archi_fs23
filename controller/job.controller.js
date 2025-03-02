const { response } = require("express");
const jobModel = require("../model/job.modol");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const jobCreate = async (req, res, next)=>{
    try{
        const jobObj = {
            ...req.body,
            isVacant: true
        }
        const responce = await jobModel.create(jobObj);
        res.json({
            success: true,
            message: `Job created successfully with id ${responce._id}`
        })
    }catch(err){
        next(err);
    }
};


const jobList = async (req, res, next) => {
    try{
        const minExprienceRequired = parseInt(req.query.minExprienceRequired || 0);

        const id = req.query.id;
        console.log(id)
        
        let jobData;
        if(!id){
            jobData = await jobModel.find({
                minExprienceRequired: {
                    $gte: minExprienceRequired
                }
            });
        }else{
            jobData = await jobModel.findById(id);
        }

        res.json({
            success: true,
            message: "list of job API",
            data: jobData
        })

    }catch(err){
        next(err)
    }
};

const jobEdit = async(req, res, next)=>{
    try{
        await jobModel.findByIdAndUpdate(req.query.id,  req.body);
        res.json({
            success: true,
            message: "Job edited successfully"
        })
    }catch(err){
        next(err);
    }
};

const jobDelete = async (req, res, next)=>{
    try{
        await jobModel.findByIdAndDelete(req.query.id);
        // await jobModel.deleteMany('take obj', "update obj");
        res.json({
            success: true,
            message: "Job deleted successfully"
        })
    }catch(err){
        next(err);
    }
};


const jobController = {
    jobCreate,
    jobList,
    jobEdit,
    jobDelete
}

module.exports = jobController;












// let obj = {
//     "title": "Fullstack Js Developer",
//     "description": "Developer will be responcible to devlop JS based app, handle logical part, comminution sood be very well",
//     "location": "Delhi and Hariyana",
//     "skills": ["MERN", "JavaScript", "HTML", "CSS", "Depoloyment", "Testing"],
//     "minExprienceRequired": 0,
//     "salary": 100000,
//     "isVacant": true

// }