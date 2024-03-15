const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
const adminAuth = async (req, res, next) => {
  try {
    const adminUser = await Users.findOne({ _id: req.user.id });
    if (adminUser.role === 0) {
      return res.status(400).json({ msg: "u are not admin User" });
    }

    const token = req.header("Authorization");
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ msg: "invalid token" });
      }
      req.user = user;
      next();
    });
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = adminAuth;
