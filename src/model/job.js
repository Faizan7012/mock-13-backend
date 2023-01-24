const {model , Schema} = require('mongoose');

const jobS = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    company :{type:String , required :true},
    position: { type: String, required: true},
    contract :{type:String , required :true },
    location:{type : String , required :true}
},{
    versionKey:false , timestamps:true
})

const Jobs = model('job', jobS);

module.exports = Jobs;