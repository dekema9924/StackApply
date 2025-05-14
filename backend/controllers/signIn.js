const Userdb = require('../models/userModel')
const bcrypt = require('bcryptjs');
const CreateToken = require('../utils/CreateToken');


const SignIn = async (req, res) => {
    const { username, password } = req.body

    const UserExist = await Userdb.findOne({
        $or: [
            { email: username },
            { username: username }
        ]
    });

    if (!UserExist) return res.status(400).json({ message: 'Invalid email or Username' })

    //compare passwords if user exist
    bcrypt.compare(password, UserExist.password, function (err, result) {
        if (result) {

            let token = CreateToken(UserExist)
            //pass token in cookies
            res.cookie('token', token, {
                httpOnly: process.env.NODE_ENV === 'development' ? false : true,
                secure: process.env.NODE_ENV === 'development' ? false : true,
                sameSite: process.env.NODE_ENV === 'development' ? 'Lax' : 'Strict',
                maxAge: 30 * 1000 // 1 day
            })
            return res.status(200).json({
                message: 'Login success',
            });

        }
        return res.status(400).json({ message: 'Invalid password' })
    });


}


module.exports = SignIn
