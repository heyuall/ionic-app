var express = require('express');
var app = express.Router();
var bodyparser = require('body-parser');

Historique = require('../models/historique');
// Afficher les comptes utilisateurs:
app.get('/all', function (req, res) {
  Historique.find({}, function (err, result) {
    if (err) {
      throw err;

    }
    res.send(result);
  })

});
module.exports = app;
