const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Orders = require("../models/orders");

router.post("/productOrder", fetchUserId, async (req, res) => {
  const { orders } = req.body;
  console.log("orders = ",orders)

  // Check if userId is correctly set by fetchUserId middleware
  const userId = req.userId;
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  console.log("orders = ",orders)
  try {
    // Create a new instance of Orders model
    await Orders.create({
      orderedProduct: orders,
      userId: req.userId,
    });

    res.status(200).json({ message: "Order created successfully" });
  } catch (error) {
    // Handle any errors that occur during database operation
    console.error("Error creating order:", error.message);
    res.status(500).json({ error: "Internal Server Error" }); // General error message for security
  }
});

module.exports = router;
