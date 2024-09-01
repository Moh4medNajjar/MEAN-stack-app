const Order = require('../models/Order');

// Get all incoming orders
exports.getAllOrders = async (req, res) => {
    try {
        // Find all orders and return them
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};


// Get all orders that are not served
exports.getNotServedOrders = async (req, res) => {
    try {
        // Query to find orders where status is not "Served"
        const orders = await Order.find({ status: { $ne: 'Served' } })
            .populate('orderDetails.product', 'name'); // Populate the product field with the name
        
        // Return the orders in the response
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.createOrder = async (req, res) => {
    const { username, tableNumber, orderDetails, totalPrice } = req.body;

    if (!username || typeof tableNumber !== 'number' || tableNumber <= 0 || !Array.isArray(orderDetails) || orderDetails.length === 0 || typeof totalPrice !== 'number' || totalPrice <= 0) {
        return res.status(400).json({ msg: 'Invalid input' });
    }

    try {
        const newOrder = new Order({
            username,
            tableNumber,
            orderDetails,
            totalPrice,
        });
        const savedOrder = await newOrder.save();

        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
    const orderId = req.params.id;
    const { status } = req.body;

    try {
        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        res.json(order);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id).populate('user', 'username');
        if (!order) {
            return res.status(404).json({ msg: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};
