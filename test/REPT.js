var assert = require('assert');
var REPT = require('./REPT');

describe('REPT', function() {
  it('should repeat a text pattern n times', function() {
    assert( REPT('-*', 3) === '-*-*-*' ); 
    assert( REPT('repeat ', 5) === 'repeat repeat repeat repeat repeat ' ); 
  }); 
});
