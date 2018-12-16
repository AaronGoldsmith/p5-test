class TriangleDots{

  // x,y are the canvas coordinates of the top most bead
  constructor(x,y,h){
    this.x = x;
    this.y = y;
    this.h = h;
  }

  
  show(){
    push();
    translate(this.x,this.y);
    for(var level = 0;level<this.h;level++){
      for(var item = 0;item<(level+1);item++){
         ellipse(item*40,level*40,40);
      }
      translate(-20,0);
    }
    pop();
  }
  
}

module.export = TriangleDots;