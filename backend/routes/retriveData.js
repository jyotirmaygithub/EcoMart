const product = require("../models/product");
const CartItem = require("../models/Cart");
const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const User = require("../models/User");
const Orders = require("../models/orders")

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
router.get("/cart-products", fetchUserId, async (req, res) => {
  try {
    // Retrieve all cart items for the specific user
    const cartItems = await CartItem.find({ userId: req.userId });
    res.send({ data: cartItems });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Internal server error");
  }
});

router.get("/total-users", async (req, res) => {
  try {
    // Retrieve all documents from the products collection
    const products = await User.find();
    const numberOfProducts = products.length;
    res.send({ data: numberOfProducts });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Internal server error");
  }
});

// Route : To retrieve orders data.
router.get("/productOrder", fetchUserId, async (req, res) => {
  try {
    // Retrieve all cart items for the specific user
    const cartItems = await Orders.find({ userId: req.userId });

    // Use a Map to store unique products based on product ID
    const uniqueCartItems = [];
    const productMap = new Map();

    for (const item of cartItems) {
      if (!productMap.has(item.productId)) {
        productMap.set(item.productId, true);
        uniqueCartItems.push(item);
      }
    }

    res.send({ data: uniqueCartItems });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Internal server error");
  }
});


module.exports = router;
