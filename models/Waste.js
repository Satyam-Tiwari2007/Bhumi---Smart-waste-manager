import mongoose from "mongoose";

const wasteSchema = new mongoose.Schema({
  image: String,
  location: String,
  description: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Waste = mongoose.model("Waste", wasteSchema);

export default Waste;