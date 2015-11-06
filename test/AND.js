import test from 'tape'
import and from '../lib/AND'

test('it be an exclusive and', (t) => {
  t.plan(5)
  t.equal( and(true, true), true)
  t.equal( and(true, false), false)
  t.equal( and(false, true), false)
  t.equal( and(true, true, true), true)
  t.equal( and(true, false, true), false)
});
