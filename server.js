'use strict';

// DEPENDENCIES
const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require('./db/db.json');

// SETUP
const app = express();
const PORT = process.env.PORT || 3000;

// DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// HTML ROUTES
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// API ROUTES
app.get('/api/notes', (req, res) => {
  if (db.length > 0) {
    for (let i = 0; i < db.length; i++) {
      db[i].id = i;
    }
  }

  console.log(db);

  res.json(db);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  let noteID = db.length;

  newNote.id = noteID;

  db.push(newNote);

  fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(db), err => {
    if (err) throw err;
  });

  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  db.splice(
    db.findIndex(note => note.id.toString() === id),
    1
  );

  fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(db), err => {
    if (err) throw err;
  });

  res.json(db);
});

// LISTENER
app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
