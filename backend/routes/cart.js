const express = require("express");
const router = express.Router();
const CartItem = require("../models/Cart"); // Adjusted to match the model name
const fetchUserId = require("../middleware/fetchUserId");

// POST /api/cart/new-cart-product
router.post("/new-cart-product", fetchUserId, async (req, res) => {
  const {
    productId,
    productQuantity,
    productName,
    productPrice,
    productImage, // Changed to singular for consistency
  } = req.body;

  // Check if userId is correctly set by fetchUserId middleware
  const userId = req.userId;
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  // Validate request body
  if (!productId || !productQuantity || !productName || !productPrice || !productImage) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create a new instance of CartItem model
    const data = await CartItem.create({
      productId: productId,
      title: productName,
      quantity: productQuantity,
      price: productPrice,
      image: productImage,
      userId: userId,
    });

    // Respond with the saved cart item
    res.status(201).json(data);
  } catch (error) {
    // Handle any errors that occur during database operation
    console.error("Error creating cart item:", error.message);
    res.status(500).json({ error: "Internal Server Error" }); // General error message for security
  }
});

module.exports = router;
