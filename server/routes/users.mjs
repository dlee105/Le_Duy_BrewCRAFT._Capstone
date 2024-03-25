import express from "express";
import User from "../models/userSchema.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json("User Route");
});

export default router;
