'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const notesDB = require('../db/db.json');

const app = express();

app.use(express.json());

app.get('/notes', (req, res) => {
  console.log(notesDB);
  if (notesDB.length > 0) {
    for (let i = 0; i < notesDB.length; i++) {
      notesDB[i].id = i + 1;
    }
  }

  res.json(notesDB);
});

app.post('/notes', (req, res) => {
  const newNote = req.body;
  let noteID = notesDB.length + 1;

  newNote.id = noteID;

  notesDB.push(newNote);

  fs.writeFile(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesDB),
    err => {
      if (err) throw err;
    }
  );

  res.json(newNote);
});

app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;

  notesDB.splice(
    notesDB.findIndex(note => note.id.toString() === id),
    1
  );

  fs.writeFile(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesDB),
    err => {
      if (err) throw err;
    }
  );

  res.json(notesDB);
});

module.exports = app;