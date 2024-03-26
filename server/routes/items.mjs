import express from "express";
import Item from "../models/itemsSchema.mjs";

const router = express.Router();

// CRUD for Items
router.get("/", async (req, res) => {
  // res.json({ hi: "hi" });
  try {
    const allItems = await Item.find();
    res.json(allItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const item = new Item({});
});

router.get("/:id", getItemId, async (req, res) => {
  res.send(res.item);
});

router.patch("/:id", getItemId, async (req, res) => {
  if (req.body.itemName != null) {
    res.item.itemName = req.body.itemName;
  }
  if (req.body.itemType != null) {
    res.item.itemType = req.body.itemType;
  }
  if (req.body.description != null) {
    res.item.description = req.body.description;
  }
  if (req.body.nationality != null) {
    res.item.nationality = req.body.nationality;
  }
  if (req.body.price != null) {
    res.item.price = req.body.price;
  }
  try {
    const updatedItem = await res.item.save();
    res.json(updatedItem);
  } catch (err) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", getItemId, async (req, res) => {
  try {
    await res.item.deleteOne();
    res.json({ message: "Item deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Special API GET req for filtering
router.get("/find/:query", getItemWithQuery, async (req, res) => {
  res.send(res.item);
});

async function getItemId(req, res, next) {
  let item;
  try {
    item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Items does not" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.item = item;

  next();
}

async function getItemWithQuery(req, res, next) {
  console.log(req.params.query);

  let item;

  try {
    item = await Item.find({ nationality: req.params.query });
    if (item == null) {
      return res.status(404).json({ message: "Items does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.item = item;
  next();
}

export default router;
