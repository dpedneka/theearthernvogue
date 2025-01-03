// index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS middleware

const config = require("./config");

const authRoutes = require("./routes/authRoutes");

const customerOrderRoutes = require("./routes/customerOrderRoutes");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productCategoryRoutes = require("./routes/productCategoryRoutes");
const productRoutes = require("./routes/productRoutes");
const supplierOrderRoutes = require("./routes/supplierOrderRoutes");
const supplierRoutes = require("./routes/supplierRoutes");

require("dotenv").config(); // Load environment variables

const app = express();
// Middleware to parse JSON
app.use(bodyParser.json());

// Cors
const corsOptions = {
  origin: [
    "http://localhost:5000",
    "http://localhost:3000",
    "http://localhost:3001",
    "https://admin.theearthernvogue.com",
    "https://theearthernvogue.com",
    "https://www.theearthernvogue.com",
  ], // Replace with your frontend's URL
  credentials: true, // If you need to send cookies or authentication headers
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Serve static files from the "uploads" folder
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/customer-orders", customerOrderRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/product-categories", productCategoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/supplier-orders", supplierOrderRoutes);
app.use("/api/suppliers", supplierRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
