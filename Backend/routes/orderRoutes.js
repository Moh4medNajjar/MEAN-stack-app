const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    createOrder,
    updateOrderStatus,
    getOrdersByUsername,
    getNotServedOrders,
    getOrderById
} = require('../controllers/orderController');

// Get all orders
router.get('/', getAllOrders);

router.get('/forWaiter', getNotServedOrders)

// Create a new order
router.post('/', createOrder);


// Update order status
router.put('/:id/status', updateOrderStatus);

router.put('/orders/:id/status', updateOrderStatus);

// Get an order by ID
router.get('/:username', getOrdersByUsername);

router.get('/facture/:id', getOrderById);



module.exports = router;
