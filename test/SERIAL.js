var serial = require('../src/SERIAL');
var test = require('tape');

test('should convert a date to a number', function(t) {
  t.plan(5)
  t.equal( serial(new Date(2008, 0, 1)), 39448, 'Should be 39448');
  t.equal( serial(new Date(1900, 0, 1)), 2, 'Should be 2');
  t.equal( serial(new Date(1900, 1, 1)), 33, 'Should be 33');
  t.equal( serial(new Date(1900, 2, 1)), 61, 'Should be 61');
  t.equal( serial(new Date(2000, 0, 1)), 36526, 'Should be 36526');
});
