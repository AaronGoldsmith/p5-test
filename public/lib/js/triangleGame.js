
const SIZE = 5;

// randomize who goes first
let color = (Math.floor(Math.random()*2)==1)?"blue":"red";

//  VIEW    MODEL     HTML        Turn
let board, triangle, description, moveNum;
let currentColors;

function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  background(0);
  description = createP('');
  description.parent('page-wrap')

  noLoop()

  moveNum = 0;
  triangle = new TriangleModel(SIZE);

  board = new TriangleView(width/2,height/4, SIZE);

  updateHTML();

}

function draw(){
  currentColors = triangle.getAllColors();
  background(0);
  board.show();
}
// checking to see if a circle was clicked on
function handleClick(myboard){
  let x = (mouseX-myboard.loc.x), y = (mouseY-myboard.loc.y);
  let min = 15;
  let minObj = -1;
  for(var i = 0;i<myboard.Tlocs.length;i++){
    let bloc = myboard.Tlocs[i];
    let tempDist = dist( x,y,bloc.x,bloc.y);
    if(tempDist<min){
      min=tempDist;
      minObj = i;
    }
  }
  return minObj;
}



  // Display which color's turn
function updateHTML(){
  description.html(
      `<h2 style='color:${color}'>
          It's ${color}'s move 
      </h2>`)
  redraw();
}



// VIEW
class TriangleView{

  // x,y are the canvas coordinates of the top most bead
  constructor(x,y,h){
    this.loc = createVector(x,y);  
    this.Tlocs = this.assignSpots(h); // array of locations : [[100, 10], [20,30]...]
  }

  assignSpots(height){
    let locs = [];
    for(var level = 0;level<height;level++){
      for(var item = 0;item<=level;item++){
          let scaled = level*20;
          locs.push(createVector(item*40-scaled,2*scaled));
      }
    }
    return locs;
  }

  show(){
    translate(this.loc.x, this.loc.y);
    for(let index = 0;index<currentColors.length;index++){
      var spot = this.Tlocs[index]
      fill(currentColors[index])
      ellipse(spot.x,spot.y,34);
    }

  }
}

function mousePressed(){
  // check to see if clicked on a valid spot
  // toggle state of color 
  let elClicked = handleClick(board);
  if(elClicked>=0){
      if(triangle.updateId(elClicked,color,floor(moveNum/2))){
        moveNum++;
        if(color==='blue'){
          color='red';
        }
        else{
           color='blue';
        }
        updateHTML();
      }
    }
}