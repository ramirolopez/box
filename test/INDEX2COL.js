var INDEX2COL = require('../src/INDEX2COL');
var error = require('formula-errors');
var test = require('tape');

test('should convert row and column to number', function(t) {
  t.plan(3)
  t.equal( INDEX2COL(0), 0, 'Should still be 0');
  t.equal( INDEX2COL(1), 1, 'Should be 1');
  t.equal( INDEX2COL(16385), 1, 'Should still be 1');
});
