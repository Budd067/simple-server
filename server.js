const express = require("express");
const app = express();

// This lets the server read JSON data
app.use(express.json());

// Test route (browser check)
app.get("/", (req, res) => {
  res.send("Server is running");
});

// POST route to receive data
app.post("/data", (req, res) => {
  console.log("Received data:", req.body);

  res.json({
    success: true,
    received: req.body
  });
});

// Render provides PORT automatically
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
