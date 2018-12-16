class TriangleDots{
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

const state = {
  color: 'blue',
  move: 1
}
let triangle;
let paragraph;

function fact(n){
  if(n==1){return 1;}
  else if(n<1){return 0;}
  return n*fact(n-1);
}
function setup(){
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('canvas-container');
  background(1);
  paragraph = createDiv(`<h2 style='color:${state.color}'>${state.color} begins</h2>`);
  let B = new Board(4);
  triangle = new TriangleDots(width/2,height/4, 6);
  triangle.show();

}

class Board {
   constructor(levels){
      this.rows = [];
      this.str = "";
      this.size = levels;
      for(let i = 1;i<=levels;i++){
        for(let space = 0;space<i;space++){
          this.rows.push({color: '', move: 0});
          this.str+='('+parseInt(fact(i)+(space+1))+')';
        }
        this.str+='\n';
      }
      console.log(this.str);
   }
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
  
  paragraph.html(`<h2 style='color:${state.color}'> it's ${state.color} turn</h2>`)
}



function draw(){

}