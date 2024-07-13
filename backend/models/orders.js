const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderedProduct: {
        type: [],
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", // Ensure you have a User model
      },
    // Add other fields as required
});

module.exports = mongoose.model('order', orderSchema);
