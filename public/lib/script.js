var scripts = {};
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

module.exports = {addSum,validateNumbers};