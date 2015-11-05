var test = require('tape');
var Range = require('formula-range');
var Cell = require('formula-cell');
var isref = require('./ISREF');

test('isref', function(t) {
  t.plan(2)
  t.equal( isref( new Range(0, 1) ) );
  t.equal( isref( new Cell(1) ) );
});
