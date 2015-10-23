var test = require('tape');
var LT = require('../src/LT');
var range = require('../src/RANGE');
var sheet = require('../src/SHEET');

var s = new sheet();
var r = new range( s, 0, 10);

test('LT', function(t) {

  t.plan(4)

  t.equal( LT(2, 4), true );
  t.equal( LT(200, 800), true );
  t.equal( LT(20000000, 40000000), true );

  t.equal.deepEqual( LT( r, 5 ), [
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false ]
  );

})
