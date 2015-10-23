var assert = require('assert');
describe('TAU', function() {

  var TAU = require('./TAU');
  
  it('should be 2PI', function() {
    assert( TAU() === 2*Math.PI, 'Should be 2PI' );
  });

});
