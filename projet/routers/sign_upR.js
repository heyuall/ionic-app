var express = require('express');
var app = express.Router();
var bodyparser = require('body-parser');

Signup = require('../models/sign_up');
// Afficher les comptes utilisateurs:
app.get('/all', function (req, res) {
  Signup.find({}, function (err, result) {
    if (err) {
      throw err;

    }
    res.send(result);
  })

});
//FIND BY id
app.get('/find/:_id', function (req, res) {

  Signup.findById(req.params._id, function (err, result) {

    if (err) {


      throw err;
    }
    res.send(result);
    // res.json({ records: result });

    console.log("by id found")
  });


});
//FIND BY user-email and password:
app.get('/byusandp/:useroremail/:password', function (req, res) {


  var obj1 =
    {
      email: req.params.useroremail,
      password: req.params.password
    }
  var obj2 =
    {
      username: req.params.useroremail,
      password: req.params.password

    }
  Signup.find({$or: [obj1, obj2]}, function (err, result) {

    if (err) {

      throw err;
    }
    res.send(result);


  });


});


//FIND BY name

app.get('/byn/:username', function (req, res) {


  var obj1 =
    {
      username: req.params.username
    }

  Signup.find(obj1, function (err, result) {

    if (err) {

      throw err;
    }
    res.send(result);
    console.log(" username is here !")


  });


});
/*app.get('/byn/:user', function (req, res) {


  var obj =
    {
      name:req.params.user
    }
  Signup.find(obj, function (err, result) {

    if (err) {

      throw err;
    }
    res.send(result);

    console.log("by username found");
  });


});
*/

//ADDITION
app.post('/ADD', function (req, res) {
  var result = req.body
  Signup.create(result, function (err, result) {

    if (err) {
      if (err.code == 11000) {
        console.log("already exists")
      }
      else
        throw err

    }

    res.send(result);

  });
});
//update by ID
app.put('/updt/:_id', function (req, res) {
  var result = req.body
  Signup.findByIdAndUpdate(req.params._id, result, function (err, result) {

    if (err) {
      if (err.code == 11000) {
        console.log("already exist")
      }
      else
        throw err

    }


    res.send(result);

  });
});
//remove by ID
app.delete('/delte/:_id', function (req, res) {
  var obj =
    {
      _id: req.params._id
    }
  Signup.remove(obj, function (err, result) {

    if (err) {

      throw err;
    }
    res.send(result);
    console.log("deleted")
  });
});

module.exports = app;
