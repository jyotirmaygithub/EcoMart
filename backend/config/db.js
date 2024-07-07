const mongoose = require("mongoose");
require("dotenv").config();

// funcition to connect with the mongodb
function ConnectionToMongoose() {
  mongoose
    .connect(process.env.REACT_APP_MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection done......!!!!!"))
    .catch((err) => console.error("Connection error:", err));
}

module.exports = ConnectionToMongoose;
