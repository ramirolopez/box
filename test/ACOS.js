import acos from '../lib/ACOS';
import error from '../lib/ERROR';
import test from 'tape';

test('should calculate the inverse cosine', function(t) {
  t.plan(3)
  t.equal( acos(1), 0 );
  t.equal( acos(NaN), error.value );
  t.equal( acos('invalid'), error.value );
})
