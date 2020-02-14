'use strict';

const express = require('express');
const path = require('path');

const app = express();
// const router = express.Router();

// router.use( function (req, res, next) {
//     console.log('Initializing...');
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = app;