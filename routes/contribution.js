import express from "express";
import Waste from "../models/Waste.js";

const router = express.Router();

// GET user contributions
router.get("/:userId", async (req, res) => {
  try {
    const count = await Waste.countDocuments({
      userId: req.params.userId
    });

    res.json({ stars: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;