const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware

// Get all products
router.get('/', getAllProducts);

// Create a new product
router.post('/', authMiddleware, createProduct);

// Update a product
router.put('/:id', authMiddleware, updateProduct);

// Delete a product
router.delete('/:id', authMiddleware, deleteProduct);

// Get a product by ID
router.get('/:id', getProductById);

module.exports = router;
