import iserr from '../lib/ISERR';
import error from '../lib/ERROR';
import test from 'tape';

test('should return true if value is error', function(t) {
  t.plan(16)
  t.equal( iserr(0), false, '0 is not an error');
  t.equal( iserr(1), false, '1 is not an error');
  t.equal( iserr('Hello'), false, '"Hello" is not an error');
  t.equal( iserr(error.nil), true, 'Should be error');
  t.equal( iserr(error.value), true, 'Should be error');
  t.equal( iserr(error.ref), true, 'Should be error');
  t.equal( iserr(error.name), true, 'Should be error');
  t.equal( iserr(error.num), true, 'Should be error');
  t.equal( iserr(error.na), false, 'Should not be error');
  t.equal( iserr(error.error), true, 'Should be error');
  t.equal( iserr(error.data), true, 'Should be error');
  t.equal( iserr(error.missing), true, 'Should be error');
  t.equal( iserr(error.unknown), true, 'Should be error');
  t.equal( iserr(NaN), true, 'NaN should be error');
  t.equal( iserr(Number.POSITIVE_INFINITY), true, 'Should be error');
  t.equal( iserr(Number.NEGATIVE_INFINITY), true, 'Should be error');
});
