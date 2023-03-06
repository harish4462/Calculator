//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var add = num1 + num2;
  var mul = num1 * num2;
  var sub = num1 - num2;
  var div = num1 / num2;
  res.send("The result is addition = " + add + ", multiplication = " + mul + ", subtraction = " + sub + ", division = " + div);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is = " + bmi);
});

app.listen(3000, function() {
  console.log("started server at 3000");
});
