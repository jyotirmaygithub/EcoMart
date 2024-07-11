const express = require("express");
const router = express.Router();
const Product = require("../models/product"); // Adjust the path to your model

// Update a product by id
router.put("/update-product/:id", async (req, res) => {
  try {
    const updatedFields = {};

    // Add provided fields to the update object
    if (req.body.name) updatedFields.name = req.body.name;
    if (req.body.brand) updatedFields.brand = req.body.brand;
    if (req.body.price) updatedFields.price = req.body.price;
    if (req.body.description) updatedFields.description = req.body.description;
    if (req.body.availability) updatedFields.availability = req.body.availability;
    if (req.body.newImages && Array.isArray(req.body.newImages) && req.body.newImages.length > 0) {
      updatedFields.images = req.body.newImages;
    }
    if (req.body.originalPrice) updatedFields.original_price = req.body.originalPrice;
    if (req.body.discount) updatedFields.discount = req.body.discount;
    if (req.body.savings) updatedFields.savings = req.body.savings;
    if (req.body.inclusiveOfTaxes) updatedFields.inclusive_of_taxes = req.body.inclusiveOfTaxes;

    // Find the product by the provided id and update it with the new fields
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product: ", error);
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
