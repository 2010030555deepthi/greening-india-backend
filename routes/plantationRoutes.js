const express = require("express");
const router = express.Router();
const {
  addPlantation,
  getPlantations,
  getStats
} = require("../controllers/plantationController");

router.post("/trees", addPlantation);
router.get("/trees", getPlantations);
router.get("/stats", getStats);

module.exports = router;
