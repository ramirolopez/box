var abs = require('../src/ABS');
var test = require('tape');
var error = require('./ERRORS');

test('should convert number to absolute value', function(t) {
  t.plan(6)
  t.equal( abs(1), 1, 'Should still be 1');
  t.equal( abs(-1), 1, 'Should still be 1');
  t.equal( abs('foo'), error.value, 'Should still be error.value');
  t.equal( abs(NaN), error.value, 'Should still be error.value');
  t.equal( abs(Number.POSITIVE_INFINITY), error.value, 'Should still be error.value');
  t.equal( abs(Number.NEGATIVE_INFINITY), error.value, 'Should still be error.value');
});
