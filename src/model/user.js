const {model , Schema} = require('mongoose');

const userS = new Schema({
    name :{type:String , required :true},
    email: { type: String, required: true , unique:true},
    password :{type:String , required :true },
    role :{type:String , required :true  , default:'user'}

},{
    versionKey:false , timestamps:true
})

const User = model('user', userS);

module.exports = User;