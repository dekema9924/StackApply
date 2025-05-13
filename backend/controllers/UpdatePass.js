const Userdb = require('../models/userModel')
const bcrypt = require('bcryptjs')

function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}


const UpdatePassword = async (req, res) => {
    const { current_password, new_password } = req.body

    Userdb.findById(req.user.id).then((result) => {
        if (!result) return res.status(400).json({ message: 'invalid userID' })
        if (current_password === new_password) return res.status(400).json({ message: 'password cannot be the same as old password.' })

        bcrypt.compare(current_password, result.password, async function (err, match) {
            if (!match) return res.status(400).json({ message: 'current password is Invalid' })
            if (!isValidPassword(new_password)) return res.status(400).json({ message: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' });

            // Hash the new password
            const hash = await bcrypt.hash(new_password, 10);

            // Update password
            result.password = hash;
            await result.save();
            res.status(200).json({ message: 'password updated' })

        });
    })
}

module.exports = UpdatePassword