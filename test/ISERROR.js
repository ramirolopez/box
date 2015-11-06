import {isERROR. from '../src/ISERROR.;
import {ERROR} from '../src/ERROR';
import test from 'tape';

test('should identify ERROR.; excluding NA', function(t) {
  t.plan(13)
  t.equal( isERROR.0), false, '0 is not an ERROR.);
  t.equal( isERROR.1), false, '1 is not an ERROR.);
  t.equal( isERROR.'Hello'), false, '"Hello" is not an ERROR.);
  t.equal( isERROR.ERROR.nil), true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.value), true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.ref), true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.name), true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.num), true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.na), true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.ERROR., true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.data), true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.missing), true, 'Should be ERROR.);
  t.equal( isERROR.ERROR.unknown), true, 'Should be ERROR.);
});
