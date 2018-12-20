let ran;
function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  stroke('red');
  strokeWeight(2);
  background(255);
  noFill()

  // draw stem
  translate(width/2,height);
  line(0,0,0,-height*0.2);
  translate(0,-height*0.2);

  makeFractal(height*0.2,45,false);
}


function makeFractal(len,angle,curvy){
  if(curvy){ bezier(0,0,len*0.8,-len*0.1,0,-len*0.5,0,-len) }
  else{ line(0,0,0,-len) }

  translate(0,-len);
  if(len>1){
    push()
    rotate(angle);
    line(0,0,0,-len*0.67);
    makeFractal(len*0.77,angle,false);
    pop()
    
    push()
    rotate(-angle);
    line(0,0,0,-len*0.67);
    makeFractal(len*0.67,angle,false);
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