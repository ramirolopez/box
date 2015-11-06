import {acos} from '../src/ACOS';
import {ERROR} from '../src/ERROR';
import test from 'tape';

test('should calculate the inverse cosine', function(t) {
  t.plan(3)
  t.equal( acos(1), 0 );
  t.equal( acos(NaN), ERROR.value );
  t.equal( acos('invalid'), ERROR.value );
})
