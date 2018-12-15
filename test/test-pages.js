var expect  = require('chai').expect;
var request = require('request');

describe('Main Page content', function(){
  it('expects Hello World', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
  });
  it('expects status code 200', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
  });
})
describe('404',function(){
  it('expects a 404 code', function(done) {
    request('http://localhost:8080/profile' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
  });
});
describe('canvas page',function(){
  it('expects a canvas element to be loaded',function(done){
    request('http://localhost:8080/canvas',function(error,response,body){
<<<<<<< HEAD
      expect(body).to.include('canvas-container');
=======
      expect($(body).to.include('p5Canvas'));
>>>>>>> 90f724c70505ff162596cf92615cb03bf813cf57
      done()
    })
  })
})
