var slider;
function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  stroke('red');
  slider = createSlider(44,45,44.5,0.01);
  slider.position(width-190,height+200);
  slider.style('width', '600px');

  strokeWeight(2);
  background(255);
}
  // draw stem
 

function draw(){
  stroke('red');
  background(255);
  translate(width/2,height);
  line(0,0,0,-height*0.23);
  translate(0,-height*0.23);

  makeFractal(height*0.23,slider.value());
}

function mousePressed(){
  redraw();
}
function branch(angle,len){
  push()
  rotate(angle);
  line(0,0,0,-len*0.67);
  makeFractal(len*0.67,angle);
  pop();
}
function makeFractal(len,angle){
  line(0,0,0,-len) 
  translate(0,-len);
  if(len<5){stroke('green'); strokeWeight(1);}
  if(len>1){
    branch(angle,len);
    branch(-angle,len);
  }


}

