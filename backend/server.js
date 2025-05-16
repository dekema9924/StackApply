require('dotenv').config()
const express = require('express')
const userRoute = require('./routes/userRoutes')
const port = 3000
const app = express()
require('./config/mongoose')
var cookieParser = require('cookie-parser')
var cors = require('cors')
const jobsRouter = require('./routes/jobs')




//middlewares
app.use(cors({
    origin: process.env.NODE_ENV === 'development'
        ? 'http://localhost:5173'
        : 'https://stackapply.netlify.app',
    credentials: true
}));

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', userRoute)
app.use('/api', jobsRouter)





app.listen(port, () => {
    console.log(`server open on port ${port}`)
})