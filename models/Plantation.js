const mongoose = require("mongoose");

const plantationSchema = new mongoose.Schema({
  treeName: { type: String, required: true },
  location: { type: String, required: true },
  plantedBy: { type: String, required: true },
  date: { type: Date, default: Date.now },
  carbonOffset: { type: Number, default: 0 }
});

module.exports = mongoose.model("Plantation", plantationSchema);