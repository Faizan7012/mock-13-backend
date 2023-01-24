const {model , Schema} = require('mongoose');

const appS = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    JobID:{
        type: Schema.Types.ObjectId,
        ref: "job",
        required: true
    }
},{
    versionKey:false , timestamps:true
})

const AppJ = model('apply', appS);

module.exports = AppJ;