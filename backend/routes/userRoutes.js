
const express = require('express')
const SignIn = require('../controllers/signIn')
const SignUp = require('../controllers/signUp')
const userRoute = express.Router()


userRoute.get('/', (req, res) => {
    res.send('user route')
})

//routes
userRoute.post('/signin', SignIn)
userRoute.post('/signup', SignUp)

module.exports = userRoute
