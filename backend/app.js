// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ruleRoutes = require("./routes/ruleRoutes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Register rule routes
app.use("/api/rules", ruleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
