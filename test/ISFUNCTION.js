import test from 'tape';
import isfunc from '../lib/ISFUNCTION';

test('Function check', function(t) {
  t.plan(5);
  t.equal( isfunc(setInterval), true);
  t.equal( isfunc(function() {}), true);
  t.equal( isfunc(5), false);
  t.equal( isfunc('invalid'), false);
  t.equal( isfunc(new Date()), false);
});
