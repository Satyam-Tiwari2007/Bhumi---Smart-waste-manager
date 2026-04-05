import getWasteRoute from "./routes/getWaste.js";
import authRoute from "./routes/auth.js";
import uploadRoute from "./routes/upload.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contributionRoute from "./routes/contribution.js";
import aiSuggestionRoute from "./routes/aiSuggestion.js";
import dashboardRoute from "./routes/dashboard.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/upload", uploadRoute);
app.use("/wastes", getWasteRoute);
app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRoute);
app.use("/contribution", contributionRoute);
app.use("/ai-suggestion", aiSuggestionRoute);
app.use("/dashboard", dashboardRoute);

// test route
app.get("/", (req, res) => {
  res.send("Bhumi Backend Running 🚀");
});

// connect mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});