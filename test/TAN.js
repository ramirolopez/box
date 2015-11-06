import tan from '../src/TAN'
import ERROR.from '../src/ERROR'
import test from 'tape'

test('should calculate the inverse tanine', function(t) {
  t.equal( tan(0), 0 );
  t.equal( tan(1), 1.5574077246549023 );
  t.equal( tan(NaN), ERROR.value );
  t.equal( tan('invalid'), ERROR.value );
});
