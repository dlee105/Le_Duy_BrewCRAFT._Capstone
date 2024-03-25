import express from "express";
import Item from "../models/itemsSchema.mjs";

const router = express.Router();

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
