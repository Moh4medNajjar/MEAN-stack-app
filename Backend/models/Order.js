const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tableNumber: { type: Number, required: true },
  orderDetails: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['Preparing', 'Ready', 'Served'], default: 'Preparing' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
