const Userdb = require('../models/userModel')
var validator = require('validator');
const bcrypt = require('bcryptjs')

function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

const SignUp = async (req, res) => {
    const { username, email, password } = req.body

    const UserExist = await Userdb.findOne({
        $or: [
            { email: email },
            { username: username }
        ]
    });

    if (UserExist) return res.status(404).json({ message: 'email or username already exist' })
    const validate = validator.isEmail(email)
    if (!validate) return res.status(400).json({ messgae: 'Enter a valid Email' })
    if (!isValidPassword(password)) return res.status(400).json({ error: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' });

    // hash password
    bcrypt.hash(password, 10, async function (err, hash) {
        // Store hash in your password DB.
        const newUser = await Userdb.create({
            email, password: hash, username
        })
        await newUser.save()
        if (newUser) return res.status(200).json({ message: 'account created' })

    });








}


module.exports = SignUp
