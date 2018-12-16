class TriangleModel
{

  constructor(levels)
  {
    this.size = levels;
    this.rows = this.constructRows(levels);
  }

  
  constructRows(levels){
    let myRows = [];
    for (let i = 0; i < levels; i++) {
      for (let space = 0; space < i; space++) {
        myRows.push({ color: '\" \"', move: 0 });
      }
    }
    return myRows;
  }

  printState()
  {
    var str = ""
    for (let i = 1; i <= this.size; i++) {
      str += `row${i} `
      for (let space = 0; space < i; space++) {
        let sp = this.rows[space];
        str += `(${sp.color} – ${sp.move})`;
      }
      str += '\n';
      console.log(str);
    }
  }

}