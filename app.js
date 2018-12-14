const express = require('express')
const path = require("path");
const BP = require('body-parser');
const app = express()

const PORT = 8080;
app.use(express.static(path.join(__dirname,"public/lib/")));

app.use(BP.json());
app.use(BP.urlencoded({ extended: false }));

app.get('/', function(req,res){
  res.send('Hello World');
})

app.get('/about',function(req,res){
  res.send('About');
})

app.get('/canvas',function(req,res){
  res.sendFile(path.join(__dirname,'public/lib/sketch.html'));
})

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
})
