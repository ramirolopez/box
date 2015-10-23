var assert = require('assert');

describe('DEC2BIN', function() {

  var DEC2BIN = require('./DEC2BIN');
  var error = require('formula-errors');
  
  it('should convert decimal to binary', function() {
    assert(DEC2BIN(9) === '1001');
    assert(DEC2BIN(9, 4) === '1001');
    assert(DEC2BIN(-100) === '1110011100');
    assert(error.value === error.value);
    assert(DEC2BIN(512) === error.num);
    assert(DEC2BIN('a') === error.value);
    assert(DEC2BIN(1, 'a') === error.value);
    assert(DEC2BIN(1, -1) === error.num);
    
  });
  
});
