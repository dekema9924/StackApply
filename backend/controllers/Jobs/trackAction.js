const Userdb = require('../../models/userModel');

const trackAction = async (req, res) => {
    const userId = req.user.id;
    const { action } = req.params; // 'view',  or 'apply'

    // Map the action param to the correct field
    const actionMap = {
        view: 'jobsViewed',
        apply: 'jobsApplied',
    };


    const field = actionMap[action];

    if (!field) {
        return res.status(400).json({ message: 'Invalid action type' });
    }

    try {
        const user = await Userdb.findById(userId);
        if (!user) return res.status(400).json({ message: 'User does not exist' });

        user[field] = (user[field] || 0) + 1;
        await user.save();

        res.status(200).json({ message: `${field} incremented`, [field]: user[field] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = trackAction;
