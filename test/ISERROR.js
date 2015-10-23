var iserror = require('./ISERROR');
var assert = require('assert');
var error = require('formula-errors');

describe('iserror', function() {
  it('should identify errors; excluding NA', function() {
    assert( iserror(0) === false, '0 is not an error');
    assert( iserror(1) === false, '1 is not an error');
    assert( iserror('Hello') === false, '"Hello" is not an error');
    assert( iserror(error.nil), 'Should be error');
    assert( iserror(error.value), 'Should be error');
    assert( iserror(error.ref), 'Should be error');
    assert( iserror(error.name), 'Should be error');
    assert( iserror(error.num), 'Should be error');
    assert( iserror(error.na), 'Should be error');
    assert( iserror(error.error), 'Should be error');
    assert( iserror(error.data), 'Should be error');
    assert( iserror(error.missing), 'Should be error');
    assert( iserror(error.unknown), 'Should be error');
  });
})
  
