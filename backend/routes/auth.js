const user = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fetchUserId = require("../middleware/fetchUserId");
require("dotenv").config();

const JWT_secret = process.env.ECOMMERCE_JWT_SECRET;

// function : object which carries id of the user document.
function idObject(newUser) {
  const data = {
    newUser: {
      id: newUser.id,
    },
  };
  return data;
}

// function : to generate random password for google-auth.
function generateRandomPassword(length) {
  const characters = process.env.PASSWORD_STRING;

  let password = "";

  // Generate random characters to create the password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

//ROUTE 1 : creating an new user account POST : /api/auth/createuser
router.post("/newuser", async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  try {
    let User = await user.findOne({ email });
    if (User) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    // creating a hash password by adding salt and hash values in it.
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await user.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const data = idObject(newUser);
    const auth_token = jwt.sign(data, JWT_secret);
    res.json({ auth_token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error Occurred");
  }
});

// ROUTE 2 : Authenticate a user using : POST /api/auth/login . login required.
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(401).send("User does not exist!");
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    // Generate JWT token
    const data = idObject(existingUser);
    const auth_token = jwt.sign(data, JWT_secret);
    res.json({ auth_token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error Occurred");
  }
});

// Route 3 : google authentication : POST /api/auth/google-auth.

router.post("/google-auth", async (req, res) => {
  const { name, email } = req.body;
  try {
    let userData = await user.findOne({ email });
    if (!userData) {
      const salt = await bcrypt.genSalt(10);
      const password = generateRandomPassword(20); // Generate a random password
      const hashedPassword = await bcrypt.hash(password, salt);
      userData = await user.create({
        name: name,
        email: email,
        password: hashedPassword,
      });
    }
    const data = idObject(userData);
    const auth_token = jwt.sign(data, JWT_secret);
    res.json({ auth_token });
  } catch (error) {
    // throw errors.
    console.error(error.message);
    res.status(500).send("Internal server Error Occured");
  }
});

// Route 4 : to get entered user data :GET /api/auth/user-data.

router.get("/user-data", fetchUserId, async (req, res) => {
  try {
    let userDocument = await user
      .findById({ _id: req.userId })
      .select("-password");
    res.json({ user_data: userDocument });
  } catch (error) {
    // throw errors.
    console.error(error.message);
    res.status(500).send("Internal server Error Occured");
  }
});

module.exports = router;
