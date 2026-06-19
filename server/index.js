// This is the entry point of our backend server.

// Import the express library we just installed
const express = require("express");

// Create an "app" - this represents our actual server
const app = express();

// This middleware lets our server understand JSON data sent in requests
app.use(express.json());

// A simple test route.
// When someone visits http://localhost:5000/api/health,
// this code runs and sends back a response.
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running fine!" });
});

// Choose a port for the server to listen on
const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});