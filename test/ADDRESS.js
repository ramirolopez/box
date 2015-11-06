import test from 'tape';
import addr from '../lib/ADDRESS';

test('address', function(t) {

  t.plan(8);

  t.notEqual( typeof addr, 'undefined', 'Address API present');
  t.equal( addr(1, 1, 0), 'A1' );
  t.equal( addr(1, 1), '$A$1' );
  t.equal( addr(1, 1, 1), '$A$1' );
  t.equal( addr(10, 1), '$A$10');
  t.equal( addr(42, 42), '$AP$42');
  t.equal( addr(42, 42, 2), 'AP$42');
  t.equal( addr(42, 42, 3), '$AP42');

});
