import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    enum: ["tea", "coffee", "drink"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
});

itemSchema.index({ itemType: 1 });
itemSchema.index({ nationality: 1 });

const Item = mongoose.model("Item", itemSchema);

export default Item;
