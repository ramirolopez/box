import test from 'tape';

import {DEC2BIN} from '../src/DEC2BIN';
import {ERROR} from '../src/ERROR';

test('should convert decimal to binary', function(t) {
  t.plan(8)
  t.equal(DEC2BIN(9), '1001');
  t.equal(DEC2BIN(9, 4), '1001');
  t.equal(DEC2BIN(-100), '1110011100');
  t.equal(ERROR.value, ERROR.value);
  t.equal(DEC2BIN(512), ERROR.num);
  t.equal(DEC2BIN('a'), ERROR.value);
  t.equal(DEC2BIN(1, 'a'), ERROR.value);
  t.equal(DEC2BIN(1, -1), ERROR.num);
});
