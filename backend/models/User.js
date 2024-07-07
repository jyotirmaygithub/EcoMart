const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDetails = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture : {
    type : String,
    required : true,
    default : "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkwNTM0OTl8&ixlib=rb-4.0.3&q=85"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("user", userDetails);
module.exports = User;
