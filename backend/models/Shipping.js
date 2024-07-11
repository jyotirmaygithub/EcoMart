const mongoose = require("mongoose");

const shippingInfoSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pinCode: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // Ensure you have a User model
  },
});

const ShippingInfo = mongoose.model("ShippingInfo", shippingInfoSchema);

module.exports = ShippingInfo;
