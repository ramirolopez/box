var assert = require('assert');
var sheet = require('./SHEET');

describe('sheet', function() {
  it('should be defined', function() {
    assert( typeof sheet === 'function' );
    assert( (new sheet()).constructor.name === 'SHEET' );
  });

  it('should accept a name', function() {
    var s = new sheet('Sheet1');
    assert( s.name === 'Sheet1' );
  });

  it('should store data', function() {
    var s = new sheet('Sheet1');
    assert( Array.isArray( s.data ) );
  });
  
})
