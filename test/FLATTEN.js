import test from 'tape';
import flatten from './FLATTEN';

test('flattens nested array', (t) => {
  t.deepEqual( flatten( [ [1,2], [3,4]] ), [1,2,3,4] );
});
