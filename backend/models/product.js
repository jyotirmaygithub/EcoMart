const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  ratings: { type: Number, required: true },
  price: { type: Number, required: true },
  original_price: { type: Number, required: true },
  discount: { type: Number, required: true },
  savings: { type: Number, required: true },
  availability: { type: String, required: true },
  description: { type: String, required: true },
  inclusive_of_taxes: { type: Boolean, required: true },
  images: { type: [String], required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
