var serial = require('./SERIAL');
var assert = require('assert');

describe('serial', function() {
  it('should convert a date to a number', function() {
    assert( serial(new Date(2008, 0, 1)) === 39448, 'Should still be 39448');
  });
})
