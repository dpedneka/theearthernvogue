// config.js

require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  MONGO_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/lyricsDB", // MongoDB connection string
  JWT_SECRET: process.env.JWT_SECRET || "DarshanNikitaPoojaSS", // JWT secret for signing tokens
  PORT: process.env.PORT || 5000, // Server port
  NODE_ENV: process.env.NODE_ENV || "development", // Development or production mode
};
