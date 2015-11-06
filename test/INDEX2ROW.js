import {INDEX2ROW} from '../src/INDEX2ROW';
import {ERROR} from '../src/ERROR';
import test from 'tape';

test('index2row', function(t) {
    t.equal( INDEX2ROW(0), 0, 'should be 0');
    t.equal( INDEX2ROW(1), 0, 'should still be 0');
    t.equal( INDEX2ROW(16385), 1, 'should be 1');
})
