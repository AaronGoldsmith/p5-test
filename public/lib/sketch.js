var TriangleModel = require("./TriangleModel");
var TriangleView = require('./TriangleView');
 
const state = {
  color: 'blue',
  move: 1
}
let triangle;
let paragraph;


function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  background(1);
  paragraph = createDiv(`<h2 style='color:${state.color}'>${state.color} begins</h2>`);


  triangle = new TriangleView(width/2,height/4, 6);
  triangle.show();

}


function mousePressed(){
  // check to see if clicked on a valid spot
  // flip state of color 
  if(state.color==='blue'){
    state.color='red';
  }
  else{
    state.color='blue';
  }
  
}

  // Display which color's turn
function updateHTML(){
  paragraph.html(
      `<h2 style='color:${state.color}'>
          It's ${state.color} move 
      </h2>`)
}

function draw(){

}

let TM = new TriangleModel(3);
TM.printState();