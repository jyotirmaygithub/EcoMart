const express = require("express");
const router = express.Router();
const ShippingInfo = require("../models/Shipping");
const fetchUserId = require("../middleware/fetchUserId");

// Save shipping info
router.post("/save", fetchUserId, async (req, res) => {
  const {
    address,
    city,
    state,
    country,
    pinCode,
    phoneNo,
    email,
    firstName,
    lastName,
  } = req.body;

  // Check if userId is correctly set by fetchUserId middleware
  if (!req.userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    await ShippingInfo.create({
      address,
      city,
      state,
      country,
      pinCode,
      phoneNo,
      email,
      firstName,
      lastName,
      userId: req.userId,
    });

    res.status(201).json({ message: "Shipping info saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
