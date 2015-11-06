import {cos} from '../src/COS';
import {ERROR} from '../src/ERROR';
import test from 'tape';

test('should calculate the inverse cosine', function(t) {
  t.plan(3);
  t.equal( cos(0), 1 );
  t.equal( cos(NaN), ERROR.value );
  t.equal( cos('invalid'), ERROR.value );
})
