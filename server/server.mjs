import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.mjs";
dotenv.config();

// ========================================================= //

import Item from "./models/itemsSchema.mjs";
import items from "./routes/items.mjs";
//
import User from "./models/userSchema.mjs";
import users from "./routes/users.mjs";
//
import Feature from "./models/featureSchema.mjs";
import features from "./routes/features.mjs";

const app = express();
connectDB();

// ---------------------- MIDDLEWARE ------------------------- //

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

// ----------------------- ROUTING ---------------------------- //

app.get("/", (req, res) => {
  res.json({ status: "hi" });
});

app.use("/api/items", items);
app.use("/api/users", users);
app.use("/api/features", features);

// ERROR---------------------------------------------------------- //
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});
// --------------------------------------------------------------- //
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT || 5050}.`);
});
