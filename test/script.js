const testObj = require('../public/lib/script');
var assert = require('assert');

// 2 DESCRIBES
describe('[TEST FN]', function(){
  describe('addSum(arr)',function(){
    it('sum the elements in the array', function(){
      assert.equal(testObj.addSum([1,2,3]),6);
    });
    it('should sum the values in an array',function(){
       assert.equal(testObj.addSum([1,1,1,1]),4);
    })
    it('should sum the values in an array',function(){
      assert.equal(testObj.addSum([1,-1,1,-1]),0);
    })
  });
  describe('validateNumbers(str,n)',function(){
    it('indicates failure when a string is used to add', function(){
      assert.equal(testObj.validateNumbers("A",1),false);
    } )
  })
});

// 1 DESCRIBE & 1 CONTEXT
describe('Fact(n)',function(){
  context('• base', function(){ 
    it('should return 1 for n = 1',function(){
      assert.equal(testObj.fact(1),1);
    });
    it('should return 1 for n = 0',function(){
      assert.equal(testObj.fact(0),1);
    });
  });

  context('• recursive',function(){    
    it('should return fact(4)*...*fact(1)',function(){
      assert.equal(testObj.fact(4),24);
    })
    it('should return fact(7)*...*fact(1)',function(){
      assert.equal(testObj.fact(7),5040);
    })
  })
})

describe('Sequence', function(){
  context('• base',function(){
    it('returns 1 when there is one item', function(){
      assert.equal(testObj.seq(1),1);
    })
    it('returns 0 when there are 0 items', function(){
      assert.equal(testObj.seq(0),0);
    })
  })
  context('• recursive',function(){
    it('returns n + seq(n-1) until (n-k)==0',function(){
      assert.equal(testObj.seq(5), 15);
    });
  });
})
