require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();
const dns=require("dns")

dns.setServers([
  '1.1.1.1' ,
  '8.8.8.8'
])

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// DB Connection
connectDB();

// Routes
app.use("/api", require("./routes/plantationRoutes"));

// Health check
app.get("/", (req, res) => {
  res.send("Greening India API Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));