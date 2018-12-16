class TriangleModel {

  constructor(levels){
     this.rows = [];
     this.size = levels;

      for(let i = 0;i<this.size;i++){
        for(let space = 0;space<i;space++){
          this.rows.push({color: '\" \"', move: 0});
        }
      }
    }

     printState(){
      // var count = 0;
      var str = ""
      for(let i = 1;i<=this.size;i++){
        str+= `row${i} `
        for(let space = 0;space<i;space++){
          let sp = this.rows[space];
          str+= `(${sp.color} – ${sp.move})`;
        }
        str+='\n';
        console.log(str);
     }
    }
    
}