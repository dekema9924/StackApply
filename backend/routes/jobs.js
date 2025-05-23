

const express = require('express')
const getJobs = require('../controllers/Jobs/getJobs')
const jobDetails = require('../controllers/Jobs/jobDetails')
const SavedJobs = require('../controllers/Jobs/SaveJobs')
const VerifyToken = require('../middleware/VerifyToken')
const getMyJobs = require('../controllers/Jobs/getMyJobs')
const SearchJobs = require('../controllers/Jobs/Search')
const trackAction = require('../controllers/Jobs/trackAction')
const jobsRouter = express.Router()


jobsRouter.get('/', (req, res) => {
    res.send('jobs api')
})

jobsRouter.get('/jobs', getJobs)
jobsRouter.get('/jobs/:id', jobDetails)
jobsRouter.post('/myjobs', VerifyToken, SavedJobs)
jobsRouter.get('/myjobs', VerifyToken, getMyJobs)
jobsRouter.post('/search', SearchJobs)
jobsRouter.post('/track/:action', VerifyToken, trackAction)






module.exports = jobsRouter