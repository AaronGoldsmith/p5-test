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

  makeFractal(height*0.23,45+random(0.1));
}


function makeFractal(len,angle){
  line(0,0,0,-len) 
  translate(0,-len);
  if(len<5){stroke('green'); strokeWeight(1);}
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

