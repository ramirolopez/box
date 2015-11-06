import tan from '../lib/TAN'
import error from '../lib/ERROR'
import test from 'tape'

test('should calculate the inverse tanine', function(t) {
  t.equal( tan(0), 0 );
  t.equal( tan(1), 1.5574077246549023 );
  t.equal( tan(NaN), error.value );
  t.equal( tan('invalid'), error.value );
});
