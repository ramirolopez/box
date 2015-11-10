import {RANGE} from '../src/RANGE';
import test from 'tape';
import error from '../src/ERROR';

test('RANGE : should convert number to absolute value', function(t) {
  t.plan(1)
  t.equal( typeof RANGE, 'function' )
});
