const authMiddleware = require('./authMiddleware'); // Import auth middleware

const adminMiddleware = (req, res, next) => {
    authMiddleware(req, res, () => {
        if (req.user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ msg: 'Access denied' });
        }
    });
};

module.exports = adminMiddleware;
