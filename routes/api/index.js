const route = require("express").Router();
const fs = require("fs");
const { writeFile, readFile } = fs.promises;
const { v4: uuidv4 } = require("uuid");

route.get("/notes", async (req, res) => {
  const db = await readFile("db/db.json");
  res.send(db);
});

route.post("/notes", async (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4()
  const oldNotes = await readFile("db/db.json");
  const parsedNotes = JSON.parse(oldNotes);
  parsedNotes.push(newNote);
  const newDb = await writeFile("db/db.json", JSON.stringify(parsedNotes));
  res.json(newDb) 
});

module.exports = route;
