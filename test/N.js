var n = require('../src/N');
var error = require('../src/ERROR');
var test = require('tape');

test('should convert value to number', function(t) {
  t.plan(6)
  t.equal( n(1), 1, 'Should still be 1');
  t.equal( n(100.5), 100.5, 'Should still be 100.5');
  t.equal( n(true), 1, 'True should be 1');
  t.equal( n(false), 0, 'False should be 0');
  t.equal( n(error.value), error.value, 'Error should pass through call');
  t.equal( n('invalid'), 0, 'Anything else should be 0');
});
