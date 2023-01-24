const express = require('express');
const { applyJob, getAppJob } = require('../controller/apply');
const { userMiddle } = require('../middleware/user');
const Ar = express.Router();

Ar.use(userMiddle)
Ar.get('/',getAppJob)
Ar.post('/:id', applyJob)

module.exports = Ar