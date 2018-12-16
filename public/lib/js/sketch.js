
const SIZE = 6;
let color = (Math.floor(Math.random()*2)==1)?"blue":"red";
let board, triangle,description,moveNum;


function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  background(0);
  description = createP('');
  description.parent('page-wrap')
  this.updateHTML();

  board = new TriangleView(width/2,height/4, SIZE);
  triangle = new TriangleModel(SIZE);
  board.show();

}
// checking to see if a circle was clicked on
function handleClick(x,y){
  let _x = (x-board.x), _y = (y-board.y);
  let min = 20;
  let minObj = -1;
  for(var i = 0;i<board.Tlocs.length;i++){
    let tempDist = dist( _x,_y,board.Tlocs[i].x,board.Tlocs[i].y);
    if(tempDist<min){
      min=tempDist;
      minObj = i;
    }
  }
  return minObj;
}

// controller
function updateDot(model,index,color,mov){
  model.rows[index].color = color;
  model.rows[index].move = mov;
  return model;
}

function mousePressed(){
  // check to see if clicked on a valid spot
  // flip state of color 
  let elClicked = handleClick(mouseX,mouseY);
  triangle.updateId(1,'blue',4);
  if(elClicked>=0){
    console.log(elClicked);
    triangle.rows = updateDot(triangle,elClicked,color,moveNum)
    if(color==='blue'){
      color='red';
    }
    else{
       color='blue';
    }
  }

}

  // Display which color's turn
function updateHTML(){
  description.html(
      `<h2 style='color:${color}'>
          It's ${color}'s move 
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
    this.Tlocs = this.findSpots();
  }

  findSpots(){
    let locs = [];
    for(var level = 0;level<this.h;level++){
      for(var item = 0;item<(level+1);item++){
          locs.push(createVector(item*40-20*level,level*40));
      }
    }
    return locs;
  }
  

  show(){
    translate(this.x, this.y);
    for(var spot of this.Tlocs){
      ellipse(spot.x,spot.y,40);
    }
  }
}

