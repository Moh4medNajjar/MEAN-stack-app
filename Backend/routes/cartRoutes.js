const express = require('express');
const router = express.Router();
const {
    addToCart,
    getCartItems,
    removeFromCart,
    clearCart
} = require('../controllers/cartController');


// Add an item to the cart
router.post('/add', addToCart);

// View the cart
router.get('/items/:username', getCartItems);

// Remove an item from the cart
router.delete('/remove', removeFromCart);

// Clear the cart
router.delete('/clear/:username', clearCart);

module.exports = router;
