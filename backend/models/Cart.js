const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product", // Ensure you have a Product model
  },
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity can not be less than 1."], // Ensures quantity is at least 1
  },
  price: {
    type: Number, // Changed from String to Number
    required: true,
    min: [0, "Price can not be negative."], // Ensures price is non-negative
  },
  image: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // Ensure you have a User model
  },
}, {
  timestamps: true // Automatically manages createdAt and updatedAt fields
});

module.exports = mongoose.model("CartItem", cartItemSchema);
