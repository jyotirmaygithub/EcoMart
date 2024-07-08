const product = require("../models/product");
const CartItem = require("../models/Cart");
const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");

// Route  : To retrive products data.
router.get("/products-data", async (req, res) => {
  try {
    // Retrieve all documents from the products collection
    const products = await product.find();
    res.send({ data: products });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Internal server error");
  }
});

// Route 1 : To retrive single product data.
router.post("/single-product", async (req, res) => {
  try {
    const { id } = req.body;
    const singleProduct = await product.findById({ _id: id });
    res.json({ data: singleProduct });
  } catch (error) {
    // throw errors.
    console.error(error.message);
    res.status(500).send("Internal server Error Occurred");
  }
});

// Route : To retrive cart data.
router.get('/cart-products', fetchUserId, async (req, res) => {
  try {
    // Retrieve all cart items for the specific user
    const cartItems = await CartItem.find({ userId: req.userId });

    res.send({ data: cartItems });
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send('Internal server error');
  }
});


module.exports = router;
