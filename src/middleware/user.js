const jwt = require("jsonwebtoken");

const userMiddle = (req,res,next)=>{
    try {
        const token = req.headers["token"];
        const check = jwt.decode(token,'qwerty');
        if(check.role == 'user' || check.role == 'admin'){
            req.body.id = check.userID
            next();
        }
        else{
            return res.status(401).json({
                message:"invalid token",
                status:false

            })
        }
        
    } catch (error) {
        return res.status(401).json({
            message:"invalid token",
            status:false
        })
    }
}

module.exports = {userMiddle}