import test from 'tape'
import ne from './NE'

test('is should test for not equal', (t) => {
  t.plan(3)
  t.equal( ne(1, 0), true)
  t.equal( ne(1, 1), false)
  t.equal( ne('FOO', 'foo'), false)
});
