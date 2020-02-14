'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

const notesDB = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  if (notesDB.length > 0) {
    for (let i = 0; i < notesDB.length; i++) {
      notesDB[i].id = i + 1;
    }
  }

  res.json(notesDB);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  let noteID = notesDB.length + 1;

  newNote.id = noteID;

  notesDB.push(newNote);

  fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(notesDB), err => {
    if (err) throw err;
  });

  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  notesDB.splice(
    notesDB.findIndex(note => note.id.toString() === id),
    1
  );

  fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(notesDB), err => {
    if (err) throw err;
  });

  res.json(notesDB);
});

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
