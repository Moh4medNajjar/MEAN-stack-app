const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductsByCategory  // Add this import
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware

// Get all products
router.get('/', getAllProducts);

// Create a new product
router.post('/', createProduct);

// Update a product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

// Get a product by ID
router.get('/:id', getProductById);

// Get products by category
router.get('/category/:category', getProductsByCategory); // Add this route

module.exports = router;
