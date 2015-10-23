var INDEX2ROW = require('./INDEX2ROW');
var assert = require('assert');
var error = require('formula-errors');

describe('index2row', function() {
  it('should convert row and column to number', function() {
    assert( INDEX2ROW(0) === 0, 'should be 0');
    assert( INDEX2ROW(1) === 0, 'should be 0');
    assert( INDEX2ROW(16385) === 1, 'should be 1');
  });
})
