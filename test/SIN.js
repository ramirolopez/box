var sin = require('./SIN');
var assert = require('assert');
var error = require('formula-errors');

describe('sin', function() {
  it('should calculate the inverse sinine', function() {
    assert( sin(0) === 0 );
    assert( sin(NaN) === error.value );
    assert( sin('invalid') === error.value );
  });
})
