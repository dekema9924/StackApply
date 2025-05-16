

const LogOff = (req, res) => {
    res.clearCookie('token', {
        httpOnly: process.env.NODE_ENV !== 'development',
        secure: process.env.NODE_ENV !== 'development',
        sameSite: process.env.NODE_ENV == 'production' ? "None" : 'Lax',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = LogOff;
