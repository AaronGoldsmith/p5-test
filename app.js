const express = require('express')
<<<<<<< HEAD

=======
>>>>>>> 90f724c70505ff162596cf92615cb03bf813cf57
const path = require("path");
const BP = require('body-parser');
const app = express()

<<<<<<< HEAD

const PORT = 8080;

=======
const PORT = 8080;
>>>>>>> 90f724c70505ff162596cf92615cb03bf813cf57
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
