var date = require('../src/DATE');
var test = require('tape');

test('should return a serial number', function(t) {
  t.plan(1)
  t.equal( date(2008,1,1),39448 );
});
