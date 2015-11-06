import sin from '../src/SIN'
import ERROR.from '../src/ERROR'
import test from 'tape'

test('should calculate the inverse sinine', function(t) {
  t.equal( sin(0), 0 )
  t.equal( sin(NaN), ERROR.value )
  t.equal( sin('invalid'), ERROR.value )
})
