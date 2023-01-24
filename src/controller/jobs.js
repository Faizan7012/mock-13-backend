const Jobs = require("../model/job")

const createJob = async(req, res)=>{

    try{
       
        let job = await Jobs.create(req.body);

        res.send({
            message:'Job posted successfully',
            status:true
        })

    }
    catch(e){
        res.send({
            status:false,
            message:e.message
        })
    }

}
const getJob = async(req, res)=>{

    try{
       
        let job = await Jobs.find().populate('userID');
        res.send({
            message:'Job data fetched successfully',
            status:true,
            data:job
        })

    }
    catch(e){
        res.send({
            status:false,
            message:e.message
        })
    }

}

const deleteJob = async(req, res)=>{

    try{
       
        let job = await Jobs.findByIdAndDelete(req.params.id)
        res.send({
            message:'Job deleted successfully successfully',
            status:true,
        })

    }
    catch(e){
        res.send({
            status:false,
            message:e.message
        })
    }

}


const updateJob = async(req, res)=>{

    try{
       
        let job = await Jobs.findByIdAndUpdate(req.params.id , {...req.body})
        res.send({
            message:'Job updated successfully successfully',
            status:true,
        })

    }
    catch(e){
        res.send({
            status:false,
            message:e.message
        })
    }

}

module.exports = {createJob , getJob , deleteJob , updateJob}