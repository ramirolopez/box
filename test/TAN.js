var tan = require('./TAN');
var assert = require('assert');
var error = require('formula-errors');

describe('tan', function() {
  it('should calculate the inverse tanine', function() {
    assert( tan(0) === 0 );
    assert( tan(1) === 1.5574077246549023 );
    assert( tan(NaN) === error.value );
    assert( tan('invalid') === error.value );
  });
})
