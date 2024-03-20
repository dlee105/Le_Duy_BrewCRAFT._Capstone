import express from "express";
import Item from "../models/itemsSchema.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json("Hi");
});

export default router;
