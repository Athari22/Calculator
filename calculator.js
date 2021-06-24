//npm i pstree.remy@1.1.0 -D
const express = require('express');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

 app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");

});
app.post('/' , function (req, res){
  var namberOne=Number(req.body.num1);
  var namberTwo=Number(req.body.num2);
   var result=namberOne+namberTwo;
  res.send("Thanks" +result);
});


app.get('/bmiCalculator', function (req, res) {
 res.sendFile(__dirname + "/bmicalculator.html");

});

app.post('/bmiCalculator' , function (req, res){
  var weight2=parseFloat(req.body.weight);
  var height2=parseFloat(req.body.height);
   var r= weight2 / (height2 * height2);
 res.send("Your BMI is  " + r);

});


 app.listen(3000, function(){
   console.log("Listening");
 });
