
const express = require('express')
const SignIn = require('../controllers/signIn')
const SignUp = require('../controllers/signUp')
const VerifyToken = require('../middleware/VerifyToken')
const Profile = require('../controllers/Profile')
const LogOff = require('../controllers/LogOff')
const userRoute = express.Router()


userRoute.get('/', (req, res) => {
    res.send('user route')
})

//routes
userRoute.post('/signin', SignIn)
userRoute.post('/signup', SignUp)
userRoute.get('/profile', VerifyToken, Profile)
userRoute.get('/logoff', VerifyToken, LogOff)



module.exports = userRoute
