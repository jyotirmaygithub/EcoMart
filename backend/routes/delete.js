const express = require("express");
const router = express.Router();
const Product = require("../models/product"); // Adjust the path to your model

// Delete a product by id
router.delete("/delete-product/:id", async (req, res) => {
  try {
    // Find the product by the provided id and delete it
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product: ", error);
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
