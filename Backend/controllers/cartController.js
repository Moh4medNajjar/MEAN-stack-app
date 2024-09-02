const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

exports.addToCart = async (req, res) => {
    const { productName, quantity, price, username } = req.body;

    console.log('Received request body:', req.body);

    if (!productName || typeof quantity !== 'number' || quantity <= 0 || typeof price !== 'number' || price <= 0 || !username) {
        return res.status(400).json({ msg: 'Invalid input' });
    }

    try {
        const product = await Product.findOne({ name: productName });
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        let cart = await Cart.findOne({ username: username });
        if (!cart) {
            cart = new Cart({ username: username, items: [] });
        }

        console.log('Current cart items:', cart.items);

        const itemIndex = cart.items.findIndex(item => item.product === productName);
        if (itemIndex > -1) {
            console.log('Updating existing item:', cart.items[itemIndex]);
            cart.items[itemIndex].quantity += quantity;
            cart.items[itemIndex].price = price;
        } else {
            console.log('Adding new item:', { product: productName, quantity, price });
            cart.items.push({ product: productName, quantity, price });
        }

        console.log('Updated cart items:', cart.items);
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};







exports.getCartItems = async (req, res) => {
    const { username } = req.params; // Extract username from URL parameters

    try {
        // Find the user's cart
        const cart = await Cart.findOne({ username: username }).populate('items.product'); // Adjust to populate product details

        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        // Return cart items
        res.status(200).json(cart.items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};


// Remove an item from the cart
exports.removeFromCart = async (req, res) => {
    const { productName } = req.body;
    const username = req.user.username; // Ensure req.user is populated by authMiddleware

    try {
        const cart = await Cart.findOne({ username: username });
        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        const itemIndex = cart.items.findIndex(item => item.product === productName);

        if (itemIndex > -1) {
            cart.items.splice(itemIndex, 1);
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ msg: 'Product not found in cart' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.clearCart = async (req, res) => {
    const username = req.params.username; 

    try {
        await Cart.deleteOne({ username: username });
        res.status(200).json({ msg: 'Cart cleared successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};
