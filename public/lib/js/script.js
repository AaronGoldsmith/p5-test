  function addSum(arr)
  {
    const reducer = (a,b) => a+b;
    return arr.reduce(reducer);
  }
  function validateNumbers(x, y)
  {
    var parse = [parseInt(x), parseInt(y)];
    if (isNaN(parse[0]) || isNaN(parse[1])) { return false; }
    return true;
  }
  // compute factorial
  function fact(n){
    if(n<=1){return 1;}
    return n*fact(n-1);
  }

  // return n+(n-1)+(n-2).... (n-k), where k = 0
  function seq(n){
    if(n==1||n==0){return n;}
    return n+seq(n-1);
  }

module.exports = {addSum,
                  validateNumbers,
                  fact,
                  seq};

