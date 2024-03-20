import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      require: true,
    },
  ],
});

const Feature = mongoose.model("Feature", featureSchema);

export default Feature;
