const express = require('express');
const { createJob, getJob, deleteJob, updateJob } = require('../controller/jobs');
const { authMiddle } = require('../middleware/auth.middleware');
const JR = express.Router();
JR.post('/create', authMiddle ,  createJob )
JR.get('/', getJob )
JR.delete('/delete/:id',authMiddle , deleteJob )
JR.put('/update/:id',authMiddle , updateJob )


module.exports = JR