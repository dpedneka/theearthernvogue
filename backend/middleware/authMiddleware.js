// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");

// Middleware to protect routes
exports.protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[0];
  if (!token)
    return res.status(401).json({
      message: "Not authorized, no token ",
    });

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: "Not authorized" });
  }
};

// Middleware to authorize roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Not authorized" });
    }
    next();
  };
};
