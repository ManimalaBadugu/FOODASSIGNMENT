const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  distance: {
    type: Number,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
