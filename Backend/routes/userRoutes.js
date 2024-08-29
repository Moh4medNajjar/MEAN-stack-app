const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware

// Register a new user
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Update user details
router.put('/update', authMiddleware, updateUser);

// Delete a user
router.delete('/delete/:id', authMiddleware, deleteUser);

// Get all users
router.get('/', authMiddleware, getAllUsers);

// Get a user by ID
router.get('/:id', authMiddleware, getUserById);

module.exports = router;
