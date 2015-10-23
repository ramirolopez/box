import test from 'tape'
import eq from './EQ'

test('it should compare two values', (t) => {
  t.plan(3)
  t.equal( eq( 1, 1), true)
  t.equal( eq( 2, 4), false)
  t.equal( eq( 'FOO', 'fOo'), true)
})
