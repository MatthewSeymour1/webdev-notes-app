// to start:
// npm install
// npm start

import "dotenv/config";
import express from "express";

const app = express();

const port = process.env.PORT || 8080;

const notes = [
  { id: 1, text: "Buy one hundred milk" },
  { id: 2, text: "Finish the deployment tutorial" },
  { id: 3, text: "Water the plants" },
  { id: 4, text: "Watering ALL the plants" },
];

app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});