var assert = require('assert');
var REPT = require('../src/REPT');
var test = require('tape');

test('should repeat a text pattern n times', function(t) {
  t.plan(2)
  t.equal( REPT('-*', 3), '-*-*-*' );
  t.equal( REPT('repeat ', 5), 'repeat repeat repeat repeat repeat ' );
});
