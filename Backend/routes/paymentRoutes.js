const express = require('express');
const router = express.Router();
const {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePaymentStatus,
    deletePayment
} = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware

// Get all payments
router.get('/', authMiddleware, getAllPayments);

// Create a new payment
router.post('/', authMiddleware, createPayment);

// Get a payment by ID
router.get('/:id', authMiddleware, getPaymentById);

// Update payment status
router.put('/:id/status', authMiddleware, updatePaymentStatus);

// Delete a payment
router.delete('/:id', authMiddleware, deletePayment);

module.exports = router;
