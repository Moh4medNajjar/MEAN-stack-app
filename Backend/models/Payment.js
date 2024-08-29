const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  paymentMethod: { type: String, enum: ['Carte Bancaire', 'Espece'], required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  transactionId: { type: String }, // for storing transaction ID if needed
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
