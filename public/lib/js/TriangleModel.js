class TriangleModel
{

  constructor(levels)
  {
    this.size = levels;
    this.rows = this.constructRows(levels);
  }


  updateId(n,color,move){

    for(var row of this.rows){
      for(var col in this.rows.length){
        console.log(row,col);
        if(this.rows[row][col].id===n){
          this.rows[row][col].color = color;
          col.move = move;
        }
      }
    }
  }

  constructRows(levels){
    let myRows = [];
    let count = 0;
    for (let i = 1; i < levels; i++) {
      var currentRow = [];
      for (let space = 0; space <i; space++) {
        currentRow.push({id: count++, color: '', move: 0 });
      }
      myRows.push(currentRow);
    }
    return myRows;
  }
  printRows(){
    console.log(this.rows);
  }
}