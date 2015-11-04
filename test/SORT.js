var test = require('tape');
var sort = require('../src/SORT');

test('it should be this sort that', function(t) {
  t.plan(3);
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

});
