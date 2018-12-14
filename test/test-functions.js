const testObj = require('../public/lib/script');
var assert = require('assert');

describe('test functions', function(){
  describe('addSum',function(){
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
  describe('validateNumbers',function(){
    it('indicates failure when a string is used to add', function(){
      assert.equal(testObj.validateNumbers("A",1),false);
    } )
  })
});