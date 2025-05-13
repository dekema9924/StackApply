

const express = require('express')
const getJobs = require('../controllers/Jobs/getJobs')
const jobDetails = require('../controllers/Jobs/jobDetails')
const jobsRouter = express.Router()


jobsRouter.get('/', (req, res) => {
    res.send('jobs api')
})

jobsRouter.get('/jobs', getJobs)
jobsRouter.get('/jobs/:id', jobDetails)


module.exports = jobsRouter