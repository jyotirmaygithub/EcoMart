const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

});

const product = mongoose.model("products", productSchema);
module.exports = product;
