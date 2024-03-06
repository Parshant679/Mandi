const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });

    await newUser.save();

    // jwt web Token
    const accessToken = createAccessToken({ id: newUser._id });
    const refreshtoken = createRefreshToken({ id: newUser._id });

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      path: "/user/refresh_token",
    });

    res.json(accessToken);
  },
  refreshtoken: async (req, res) => {
    try {
    } catch (err) {
      console.log(err);
    }
    const ref_token = req.cookies.refreshtoken;
    if (!ref_token)
      return res.status(400).json({ msg: "please Login or Register" });

    jwt.verify(ref_token, "myRefreshTokenSecret", (err, user) => {
      if (err) {
        res.status(400).json({ msg: "please Login or Register" });
      }
      const accessToken = createAccessToken({ id: user.id });
      res.json({ user, accessToken });
    });
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
      //   const accessToken = createAccessToken({ id: newUser._id });
      //   const refreshtoken = createRefreshToken({ id: newUser._id });

      //   res.cookie("refreshtoken", refreshtoken, {
      //     httpOnly: true,
      //     path: "/user/refresh_token",
      //   });

      res.json(accessToken);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, "mySecret", { expiresIn: "1d" });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, "myRefreshTokenSecret", { expiresIn: "7d" });
};
module.exports = userCtrl;
