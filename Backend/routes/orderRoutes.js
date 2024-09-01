const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    createOrder,
    updateOrderStatus,
    getOrderById,
    getNotServedOrders
} = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware

// Get all orders
router.get('/', getAllOrders);

router.get('/forWaiter', getNotServedOrders)

// Create a new order
router.post('/', createOrder);

// Get an order by ID
router.get('/:id', getOrderById);

// Update order status
router.put('/:id/status', updateOrderStatus);

module.exports = router;
