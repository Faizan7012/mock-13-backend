const AppJ = require("../model/apply")

const applyJob = async(req , res)=>{
    const { id } = req.body;
     try{
        let apply = await AppJ.create({JobID :req.params.id, userID :id});
        res.send({
            status:true , 
            message:'Apply sucessfully'
        })
     }
     catch(e){
        res.send({
            status:false, 
            message:e.message
        })
     }
}


const getAppJob = async(req , res)=>{
    const { id } = req.params;
     try{
        let apply = await AppJ.find({userID : id}).populate('JobID')
        res.send({
            status:true , 
            message:'Apply job data fetched sucessfully',
            data:apply
        })
     }
     catch(e){
        res.send({
            status:false, 
            message:e.message
        })
     }
}

module.exports = {applyJob , getAppJob}