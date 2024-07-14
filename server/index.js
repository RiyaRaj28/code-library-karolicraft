require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const snippetRoutes = require("./routes/snippetRoutes");
const searchRoutes = require("./routes/searchRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/snippet", snippetRoutes);
app.use("/api/search", searchRoutes);
app.use("/auth/admin", authRoutes);

// Connect to MongoDB
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
