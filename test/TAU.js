import tan from '../lib/TAN'
import error from '../lib/ERROR'
import test from 'tape'
import TAU from './TAU';

test('should be 6.28...', function(t) {
  t.equal( TAU(), 6.28318530717958, 'Should be 2PI' );
});
