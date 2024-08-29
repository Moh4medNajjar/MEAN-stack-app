const express = require('express');
const router = express.Router();
const {
    addToCart,
    getCart,
    removeFromCart,
    clearCart
} = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware

// Add an item to the cart
router.post('/add', authMiddleware, addToCart);

// View the cart
router.get('/', authMiddleware, getCart);

// Remove an item from the cart
router.delete('/remove', authMiddleware, removeFromCart);

// Clear the cart
router.delete('/clear', authMiddleware, clearCart);

module.exports = router;
