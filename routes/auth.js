import express from "express";
import User from "../models/User.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
});

export default router;

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});