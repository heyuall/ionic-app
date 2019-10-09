var express = require('express');
var cors=require('cors');
var app=express();
var bodyparser = require('body-parser');
var con=require('./routers/Connection')
//
app.use(bodyparser.json());

var Signup=require('./routers/sign_upR')
app.use('/Signup',Signup)

var Historique=require('./routers/historiqueR')
app.use('/Historique',Historique)


app.listen(2000);
console.log("run on 2000");
