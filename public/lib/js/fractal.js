let ran;
function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  stroke('red');
  strokeWeight(1);
  background(255);
  noFill()

  // draw stem
  translate(width/2,height);
  line(0,0,0,-height*0.23);
  translate(0,-height*0.23);

  makeFractal(height*0.23,180*random());
}


function makeFractal(len,angle){
  line(0,0,0,-len) 
  translate(0,-len);
  if(len>1){
    push()
    rotate(angle);
    line(0,0,0,-len*0.67);
    makeFractal(len*0.67,angle);
    pop()
    
    push()
    rotate(-angle);
    line(0,0,0,-len*0.67);
    makeFractal(len*0.67,angle);
    pop()
  }


}

function drawTrunk(start){
  strokeWeight(5);
  translate(start.x,start.y);
  line(0,0,0,-height/2);
}

function draw(){
  
}