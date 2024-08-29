const Order = require('../models/Order');

// Get all incoming orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'username');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Create a new order
exports.createOrder = async (req, res) => {
    const { orderDetails, tableNumber } = req.body;
    const userId = req.user.id;

    try {
        const order = new Order({
            user: userId,
            orderDetails,
            tableNumber,
        });

        await order.save();
        res.status(201).json({ msg: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
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
