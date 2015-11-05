var error = require('formula-errors');
var test = require('tape')
var CHOOSE = require('./CHOOSE');

test('it should choose n alternative', function (t) {

  t.equal( CHOOSE(1), error.na);
  t.equal( CHOOSE(1, 'fooa'), 'fooa');
  t.equal( CHOOSE(3, 'fooa', 'foob', 'fooc'), 'fooc');
  t.equal( CHOOSE(2, 'fooa'), error.value);
  t.equal( CHOOSE(255, 'fooa'), error.value);

});
