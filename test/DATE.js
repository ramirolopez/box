import {date} from '../src/DATE';
import test from 'tape';

test('should return a serial number', function(t) {
  t.plan(1)
  t.equal( date(2008,1,1),39448 );
});
