import uploadRoute from "./routes/upload.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/upload", uploadRoute);

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