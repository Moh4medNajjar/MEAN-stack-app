const jwt = require('jsonwebtoken'); // Example, if using JWT

module.exports = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Example for Bearer token

    if (!token) {
        return res.status(403).json({ msg: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ msg: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
};
