import express from "express";
import Waste from "../models/Waste.js";

const router = express.Router();

// GET all wastes
router.get("/", async (req, res) => {
  try {
    const wastes = await Waste.find().sort({ createdAt: -1 });
    res.json(wastes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

export default router;