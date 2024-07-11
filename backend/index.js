const connectToMongo = require("./config/db");
const express = require("express");
const cors = require("cors");

// connect with database
connectToMongo();

const app = express();

// port number.
const port = 5000;

app.use(cors());
// we are using middleware to convert raw json data into js object. 
app.use(express.json());

// available routes in the project
app.use("/api/auth", require("./routes/auth"));
app.use("/api/shipping" , require("./routes/shipping"))
app.use("/api/retriveData" ,require("./routes/retriveData"))
app.use("/api/cart", require("./routes/cart"));
app.use("/api/update" , require("./routes/update"))
app.use("/api/delete" , require("./routes/delete"))
// app.use("/api/nodemailer", require("./routes/nodemailer"))

app.listen(port, () => {
  console.log(`ecommerc-backend is working on port number :  ${port}`);
});
