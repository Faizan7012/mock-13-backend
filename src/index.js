const express = require('express');
const cors = require('cors');
const { connect } = require('./config/config');
const UR = require('./routes/user');
const JR = require('./routes/job');
const Ar = require('./routes/apply');

const app = express();
app.use(express.json())
app.use(cors());
app.use('/user', UR)
app.use('/jobs', JR)
app.use('/apply', Ar)





app.get('/',async(req, res)=>{
    res.send('hello')
})

app.post('/',(req, res)=>{
    const {invest , time , roi} = req.body
    try{
    let totalI = invest*time ;
    let i = roi/100;
    let y = (1+i)**time;
    let z = y-1;
    let x = z/i;
    let totalM = Math.floor(invest*x);
    let TotalIG = Math.floor(totalM - totalI);
    res.send({
        status:true , 
        message:'Calculated sucessfully',
        totalI,
        totalM,
        TotalIG
    })
    }
    catch(e){
        res.send({
            status:false,
            message:'Something went wrong please try again later !'
        })
    }
   
})



app.listen(8080 , async()=>{
    try{
        await connect();
        console.log('listening on http://localhost:8080')
    }
    catch(e){
        console.log(e)
    }
})
