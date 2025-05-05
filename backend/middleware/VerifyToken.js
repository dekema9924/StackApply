const jwt = require('jsonwebtoken');

const VerifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err || !decoded) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        // Attach decoded user data to the request
        req.user = decoded;
        next();
    });
};

module.exports = VerifyToken;
