import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// routes
import uploadRoute from "./routes/upload.js";
import getWasteRoute from "./routes/getWaste.js";
import authRoute from "./routes/auth.js";
import dashboardRoute from "./routes/dashboard.js";
import aiRoute from "./routes/aiSuggestion.js";
import chatbotRoute from "./routes/chatbot.js";

dotenv.config();

const app = express();

// fix __dirname (ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(cors()); // ✅ fix CORS
app.use(express.json());

// serve frontend files (VERY IMPORTANT)
app.use(express.static(__dirname));

// serve uploaded images
app.use("/uploads", express.static("uploads"));

// routes
app.use("/upload", uploadRoute);
app.use("/feed", getWasteRoute);
app.use("/auth", authRoute);
app.use("/dashboard", dashboardRoute);
app.use("/chatbot", chatbotRoute);

app.use("/ai", aiRoute);

// default route
app.get("/", (req, res) => {
  res.send("Bhumi API Running 🚀");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});