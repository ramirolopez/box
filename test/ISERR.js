import {iserr} from '../src/ISERR';
import {ERROR} from '../src/ERROR';
import test from 'tape';

test('should return true if value is ERROR., function(t) {
  t.plan(16)
  t.equal( iserr(0), false, '0 is not an ERROR.);
  t.equal( iserr(1), false, '1 is not an ERROR.);
  t.equal( iserr('Hello'), false, '"Hello" is not an ERROR.);
  t.equal( iserr(ERROR.nil), true, 'Should be ERROR.);
  t.equal( iserr(ERROR.value), true, 'Should be ERROR.);
  t.equal( iserr(ERROR.ref), true, 'Should be ERROR.);
  t.equal( iserr(ERROR.name), true, 'Should be ERROR.);
  t.equal( iserr(ERROR.num), true, 'Should be ERROR.);
  t.equal( iserr(ERROR.na), false, 'Should not be ERROR.);
  t.equal( iserr(ERROR.ERROR., true, 'Should be ERROR.);
  t.equal( iserr(ERROR.data), true, 'Should be ERROR.);
  t.equal( iserr(ERROR.missing), true, 'Should be ERROR.);
  t.equal( iserr(ERROR.unknown), true, 'Should be ERROR.);
  t.equal( iserr(NaN), true, 'NaN should be ERROR.);
  t.equal( iserr(Number.POSITIVE_INFINITY), true, 'Should be ERROR.);
  t.equal( iserr(Number.NEGATIVE_INFINITY), true, 'Should be ERROR.);
});
