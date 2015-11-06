import test from 'tape';
import {sort} from '../src/SORT';

test('it should be this sort that', function(t) {
  t.plan(4);
  var a1 = [4, 3, 2, 1].map( n => [n, -n*n, n*n*n]);

  t.deepEqual( sort( a1,  1, true ), [
    [1, -1, 1],
    [2, -4, 8],
    [3, -9, 27],
    [4, -16, 64],
  ]);

  t.deepEqual( sort( a1,  2, false ), [
    [1, -1, 1],
    [2, -4, 8],
    [3, -9, 27],
    [4, -16, 64],
  ]);

  t.deepEqual( sort( a1,  3, false ), [
    [4, -16, 64],
    [3, -9, 27],
    [2, -4, 8],
    [1, -1, 1],
  ]);

  var a2 = [
    ['b', 'a']
    ['a', 'b'],
    ['a', 'a']
    ['b', 'b']
  ]

  t.deepEqual( sort( a2, 1, true, 2, true ), [
    ['a', 'a']
    ['a', 'b'],
    ['b', 'a']
    ['b', 'b']
  ] )

});
