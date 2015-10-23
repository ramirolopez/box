var CELLINDEX = require('./CELLINDEX');
var assert = require('assert');
var error = require('formula-errors');

describe('cellindex', function() {
  it('should convert row and column to number', function() {
    assert( CELLINDEX(0, 0) === 0, 'Should still be 0');
    assert( CELLINDEX(0, 1) === 1, 'Should still be 1');
    assert( CELLINDEX(1, 1) === 16385, 'Should still be 16385');
  });
})
