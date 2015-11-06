import sin from '../lib/SIN'
import error from '../lib/ERROR'
import test from 'tape'

test('should calculate the inverse sinine', function(t) {
  t.equal( sin(0), 0 )
  t.equal( sin(NaN), error.value )
  t.equal( sin('invalid'), error.value )
})
