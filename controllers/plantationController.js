const Plantation = require("../models/Plantation");

// Add plantation
exports.addPlantation = async (req, res) => {
  try {
    const plantation = new Plantation(req.body);
    await plantation.save();
    res.status(201).json(plantation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all plantations
exports.getPlantations = async (req, res) => {
  try {
    const data = await Plantation.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get stats
exports.getStats = async (req, res) => {
  try {
    const totalTrees = await Plantation.countDocuments();
    const totalCarbon = await Plantation.aggregate([
      { $group: { _id: null, total: { $sum: "$carbonOffset" } } }
    ]);

    res.json({
      totalTrees,
      totalCarbon: totalCarbon[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};