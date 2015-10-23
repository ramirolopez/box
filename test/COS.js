var cos = require('./COS');
var assert = require('assert');
var error = require('formula-errors');

describe('cos', function() {
  it('should calculate the inverse cosine', function() {
    assert( cos(0) === 1 );
    assert( cos(NaN) === error.value );
    assert( cos('invalid') === error.value );
  });
})
