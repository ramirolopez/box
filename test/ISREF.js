import test from 'tape';
import Range from '../lib/RANGE';
import Cell from '../lib/CELL';
import isref from '../lib/ISREF';

test('isref', function(t) {
  t.plan(2)
  t.equal( isref( new Range(0, 1) ) );
  t.equal( isref( new Cell(1) ) );
});
