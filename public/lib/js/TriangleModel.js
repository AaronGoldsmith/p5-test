class TriangleModel
{

  constructor(levels){
    this.size = levels;
    this.data = this.constructRows(levels);
  }

  updateId(n,mycolor,mymove){
    let loc = this.data.hash.get(n);
    if(this.data.rows[loc.y][loc.x].move==-1){
      this.data.rows[loc.y][loc.x].color = mycolor;
      this.data.rows[loc.y][loc.x].move = mymove;
      return true;
    }
    return false;
  

  }

  constructRows(levels){
    let myRows = [];
    let H = new Map();
    let count = 0;
    for (let i = 0; i < levels; i++) {
      var currentRow = [];
      for (let space = 0; space <=i; space++) {
        currentRow.push({color: 'white', move: -1 });
        H.set(count++,createVector(space,i));
      }
      myRows.push(currentRow);
    }
    return {rows: myRows, hash: H};
  }
  printRows(){
    this.data.rows.forEach( row => 
      row.forEach(spot => console.log(spot)))
  }
  getAllColors(){
    var arr = [];
    this.data.rows.forEach( row => 
      row.forEach(spot => arr.push(spot.color)))
   return arr;
  }
}

