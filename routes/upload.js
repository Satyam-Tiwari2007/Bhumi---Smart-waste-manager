import express from "express";
import multer from "multer";
import Waste from "../models/Waste.js";

const router = express.Router();

// storage setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage });

// upload route
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const waste = new Waste({
      image: req.file.path,
      location: req.body.location,
      description: req.body.description,
      userId: req.body.userId
    });

    await waste.save();

    res.json({ message: "Waste uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;   