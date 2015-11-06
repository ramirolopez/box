import cos from '../lib/COS';
import error from '../lib/ERROR';
import test from 'tape';

test('should calculate the inverse cosine', function(t) {
  t.plan(3);
  t.equal( cos(0), 1 );
  t.equal( cos(NaN), error.value );
  t.equal( cos('invalid'), error.value );
})
