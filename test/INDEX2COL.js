var INDEX2COL = require('./INDEX2COL');
var assert = require('assert');
var error = require('formula-errors');

describe('cellindex', function() {
  it('should convert row and column to number', function() {
    assert( INDEX2COL(0) === 0, 'Should still be 0');
    assert( INDEX2COL(1) === 1, 'Should still be 0');
    assert( INDEX2COL(16385) === 1, 'Should still be 1');
  });
})
