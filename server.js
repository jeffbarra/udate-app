import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Cards from "./models/dbCards.js";

// ****************** //
// *** APP CONFIG *** //
// ****************** //

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5001;

// ****************** //
// *** MIDDLEWARE *** //
// ****************** //

app.use(express.json());
app.use(Cors());

// ********************* //
// *** API ENDPOINTS *** //
// ********************* //

// Test GET request
app.get("/", (req, res) => {
  res.status(200).send(`API is Running...`);
});

// POST Request
app.post("/udate/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// GET request
app.get("/udate/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// **************** //
// *** LISTENER *** //
// **************** //

app.listen(port, () => console.log(`Listening on PORT ${port}`));
