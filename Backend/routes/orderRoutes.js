const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    createOrder,
    updateOrderStatus,
    getOrderById
} = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware

// Get all orders
router.get('/', authMiddleware, getAllOrders);

// Create a new order
router.post('/', authMiddleware, createOrder);

// Get an order by ID
router.get('/:id', authMiddleware, getOrderById);

// Update order status
router.put('/:id/status', authMiddleware, updateOrderStatus);

module.exports = router;
