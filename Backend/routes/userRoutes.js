const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUsernameById,
    getAllWaiters,
    createWaiter,
    changePassword // Add this
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware

// Register a new user
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get all waiters
router.get('/waiters', getAllWaiters);

// Create a new waiter
router.post('/waiters', createWaiter);

// Change user password
router.post('/change-password', changePassword); // Add this route

// Update user details
router.put('/update', authMiddleware, updateUser); // Ensure updateUser requires authentication

// Delete a user
router.delete('/:id', deleteUser); // Ensure deleteUser requires authentication

// Get all users
router.get('/', getAllUsers); // Ensure getAllUsers requires authentication

// Get a user by ID
router.get('/:id', getUsernameById); // Ensure getUsernameById requires authentication

module.exports = router;
