const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

// Add an item to the cart
exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            // Product exists in the cart, update the quantity
            cart.items[itemIndex].quantity += quantity;
        } else {
            // Product does not exist in the cart, add as a new item
            cart.items.push({ product: productId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// View the cart
exports.getCart = async (req, res) => {
    const userId = req.user.id;

    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Remove an item from the cart
exports.removeFromCart = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;

    try {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            cart.items.splice(itemIndex, 1);
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ msg: 'Product not found in cart' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Clear the cart
exports.clearCart = async (req, res) => {
    const userId = req.user.id;

    try {
        const cart = await Cart.findOneAndDelete({ user: userId });
        res.status(200).json({ msg: 'Cart cleared successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};
