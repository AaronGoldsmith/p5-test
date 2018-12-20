class TriangleModel
{

  constructor(levels)
  {
    this.size = levels;
    this.data = this.constructRows(levels);
  }

  // mapLocs
  // return Hashmap <Integer : p5.Vector>


  updateId(n,mycolor,mymove){
    let loc = this.data.hash.get(n);
    this.data.rows[loc.y][loc.x] = {color: mycolor,move:mymove }
  }

  constructRows(levels){
    let myRows = [];
    let H = new Map();
    let count = 0;
    for (let i = 0; i < levels; i++) {
      var currentRow = [];
      for (let space = 0; space <=i; space++) {
        currentRow.push({color: '', move: 0 });
        H.set(count++,createVector(space,i));
      }
      myRows.push(currentRow);
    }
    return {rows: myRows, hash: H};
  }
  printRows(){
    this.data.rows.forEach( row => console.log(row));
  }
}

