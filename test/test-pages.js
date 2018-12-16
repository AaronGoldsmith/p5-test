var expect  = require('chai').expect;
var request = require('request');

context('Page Requests', function(){
  describe('• home', function(){
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
  
  describe('• canvas',function(){
    it('expects a canvas element to be loaded',function(done){
      request('http://localhost:8080/canvas',function(error,response,body){
        expect(body).to.include('canvas-container');
        done()
      })
    })
  }) 
  describe('• page not found',function(){
    context('invalid page sends to 404',function(){
      it('expects a 404 code', function(done) {
        request('http://localhost:8080/profile' , function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
      });
    });
    
    context('non-alphanumerical characters', function(){
      it('expects a 404 when url contains non-alphanumerical character', function(done) {
        request('http://localhost:8080//' , function(error, response, body) {
            expect(response.statusCode).to.equal(404);
        });
        request('http://localhost:8080/!' , function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
      });
    })
    
  }); 
})
