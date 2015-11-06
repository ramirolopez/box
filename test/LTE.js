import test from 'tape';
import {range} from '../src/RANGE';
import {LTE} from '../src/LTE';

test('Should compare two values and return true or false', function(t) {

  var r = new range( 0, 10);

  t.plan(4)

  t.equal( LTE(2, 4), true );
  t.equal( LTE(200, 800), true );
  t.equal( LTE(20000000, 40000000), true );

  t.deepEqual( LTE( r, 5 ), [
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false ]
  );
});
