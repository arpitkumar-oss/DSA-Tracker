// This is the entry point of our backend server.

// Load environment variables from .env file
require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");

// Create an "app" - this represents our actual server
const app = express();

// This middleware lets our server understand JSON data sent in requests
app.use(express.json());

// Connect to MongoDB using the connection string stored in .env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

//connecting routes to main server
const problemRoutes = require("./routes/problemRoutes");
app.use("/api/problems", problemRoutes);

//connecting authRoutes to main server
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// A simple test route.
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running fine!" });
});

// Choose a port for the server to listen on
const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});