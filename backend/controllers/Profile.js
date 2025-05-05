const Userdb = require('../models/userModel')


const Profile = async (req, res) => {
    await Userdb.findById(req.user.id).select('-password').then((result) => {
        if (!result) return res.status(404).json({ message: 'User not found' })
        res.status(200).json({ user: result })
    })
}

module.exports = Profile