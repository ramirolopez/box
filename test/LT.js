import test from 'tape';
import {LT} from '../src/LT';
import {range} from '../src/RANGE';

var r = new range( 0, 10 );

test('LT', function(t) {

  t.plan(4)

  t.equal( LT(2, 4), true );
  t.equal( LT(200, 800), true );
  t.equal( LT(20000000, 40000000), true );

  t.deepEqual( LT( r, 5 ), [
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false ]
  );

})
