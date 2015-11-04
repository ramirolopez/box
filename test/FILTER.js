/* FILTER a dataset by reduction
 *
 */

import test from 'tape';
import filter from '../src/FILTER'

test('FILTER', (t) => {
  t.plan(3)
  t.deepEqual( filter( [[1], [2]], [true, false], [true, true] ), [[1]] )
  t.deepEqual( filter( [[1], [2]], [false, true], [true, true] ), [[2]] )
  t.deepEqual( filter( [[1, 1], [2, 2], [3, 3]],
    [false, true, true], [true, true, true] ),
    [[2, 2], [3, 3]] )
});
