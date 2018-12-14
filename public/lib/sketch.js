function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  background(1);
  TriangleDots(width/2,height/4, 6);
  createP('NEW GAME - Blue can begin');
}

function TriangleDots(x,y,h){
  const SZ = 20;
  push();
  translate(x,y);
  for(var level = 0;level<h;level++){
    for(var item = 0;item<(level+1);item++){
       ellipse(item*2*SZ,level*2*SZ,SZ);
    }
    translate(-1*SZ,0);
  }
  pop();
}


function draw(){

}