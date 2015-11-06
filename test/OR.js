import test from 'tape';
import or from '../lib/OR';

test('it should be this or that', function(t) {
  t.plan(5);
  t.equal( or( true, true), true);
  t.equal( or( true, false), true);
  t.equal( or( false, true), true);
  t.equal( or( false, false, true), true);
  t.equal( or( false, false ), false);
});
