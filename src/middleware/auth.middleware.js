const jwt = require("jsonwebtoken");

const authMiddle = (req,res,next)=>{
    try {
        const token = req.headers["token"];
        const check = jwt.decode(token,'qwerty');
        console.log(check)
        if(check.role === 'admin'){
            req.body.userID = check.userID
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

module.exports = {authMiddle}