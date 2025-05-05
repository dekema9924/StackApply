require('dotenv').config()
const express = require('express')
const userRoute = require('./routes/userRoutes')
const port = 3000
const app = express()
require('./config/mongoose')


//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', userRoute)








app.listen(port, () => {
    console.log(`server open on port ${port}`)
})