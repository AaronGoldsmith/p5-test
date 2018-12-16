// import { TriangleModel } from "./TriangleModel"
// const TriangleView = require('./TriangleView');
// const TriangleModel = require('./TriangleModel');

let state = {
  color: 'blue',
  move: 1
}
const SIZE = 6;
let board;
let triangle;
let description;

function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  background(1);
  description = createP('');
  description.parent('page-wrap')
  this.updateHTML();

  board = new TriangleView(width/2,height/4, 6);
  triangle = new TriangleModel(6);
  triangle.printState();
  board.show();

}
// checking to see if a circle was clicked on
function handleClick(){
  let myLoc = createVector(mouseX,mouseY);
  board

}
function TriangleDriver(){
   
}


function mousePressed(){
  // check to see if clicked on a valid spot
  // flip state of color 
  handleClick();
  if(state.color==='blue'){
    state.color='red';
  }
  else{
    state.color='blue';
  }
  
}

  // Display which color's turn
function updateHTML(){
  description.html(
      `<h2 style='color:${state.color}'>
          It's ${state.color}'s move 
      </h2>`)
}

function draw(){

}


// VIEW
class TriangleView{

  // x,y are the canvas coordinates of the top most bead
  constructor(x,y,h){
    this.x = x;
    this.y = y;
    this.h = h;
    // this.colors = fillColors(seq());
  }

  findSpots(){
    let locs = [];
    for(var level = 0;level<this.h;level++){
      for(var item = 0;item<(level+1);item++){
         ellipse(item*40,level*40,40);
      }
      translate(-20,0);
    }
  }
  

  show(){
    push();
    translate(this.x, this.y);
    for(var level = 0;level<this.h;level++){
      for(var item = 0;item<(level+1);item++){
         ellipse(item*40,level*40,40);
      }
      translate(-20,0);
    }
    pop();
  }
  
}