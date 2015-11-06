import {abs} from '../src/ABS';
import test from 'tape';
import {ERROR} from '../src/ERROR';

test('should convert number to absolute value', function(t) {
  t.plan(6)
  t.equal( abs(1), 1, 'Should still be 1');
  t.equal( abs(-1), 1, 'Should still be 1');
  t.equal( abs('foo'), ERROR.value, 'Should still be ERROR.value');
  t.equal( abs(NaN), ERROR.value, 'Should still be ERROR.value');
  t.equal( abs(Number.POSITIVE_INFINITY), ERROR.value, 'Should still be ERROR.value');
  t.equal( abs(Number.NEGATIVE_INFINITY), ERROR.value, 'Should still be ERROR.value');
});
