import test from 'tape';
import {Range} from '../src/RANGE';
import {Cell} from '../src/CELL';
import {isref} from '../src/ISREF';

test('isref', function(t) {
  t.plan(2)
  t.equal( isref( new Range(0, 1) ) );
  t.equal( isref( new Cell(1) ) );
});
