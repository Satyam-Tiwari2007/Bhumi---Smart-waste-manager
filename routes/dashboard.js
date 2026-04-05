import express from "express";
import Waste from "../models/Waste.js";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const reports = await Waste.countDocuments({ userId });

    const recent = await Waste.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      reports,
      contributions: reports,
      stars: reports,
      recent
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;