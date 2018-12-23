const express = require('express')
const path = require("path");
const BP = require('body-parser');
var app = express()

const PORT = 8080;
app.use(express.static(path.join(__dirname,"public/lib/")));

app.use(BP.json());
app.use(BP.urlencoded({ extended: false }));

app.get('/', function(req,res){
  let str = ("Hello World <p><a href='/canvas'>Canvas</a> </p>")
  res.send(str);

})
app.get('/about',function(req,res){
  res.send('About');
})

app.get('/canvas',function(req,res){
  res.sendFile(path.join(__dirname,'public/lib/sketch.html'));
})

app.listen(PORT, function () {
  console.log(`App listening on http://localhost:${PORT}`);
})