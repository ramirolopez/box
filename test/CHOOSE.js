import {ERROR} from '../src/ERROR';
import test from 'tape';
import {CHOOSE} from '../src/CHOOSE';

test('it should choose n alternative', function (t) {
  t.plan(5)
  t.equal( CHOOSE(1), ERROR.na);
  t.equal( CHOOSE(1, 'fooa'), 'fooa');
  t.equal( CHOOSE(3, 'fooa', 'foob', 'fooc'), 'fooc');
  t.equal( CHOOSE(2, 'fooa'), ERROR.value);
  t.equal( CHOOSE(255, 'fooa'), ERROR.value);

});
