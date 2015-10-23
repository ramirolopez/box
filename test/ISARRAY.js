import test from 'tape'
import isArray from './ISARRAY'

test( 'it should identify an array', (t) => {
  t.plan(3)
  t.equal( isArray( [] ), true )
  t.equal( isArray( {} ), false )
  t.equal( isArray( 'string' ), false )
})
