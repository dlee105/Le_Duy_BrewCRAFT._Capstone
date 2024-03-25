import express from "express";
import Feature from "../models/featureSchema.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json("Feature Route ");
});

export default router;
