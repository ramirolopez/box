import {SERIAL} from '../src/SERIAL';
import test from 'tape';

test('SERIAL', function(t) {
  t.plan(5)
  t.equal( SERIAL(new Date(2008, 0, 1)), 39448, 'Should be 39448');
  t.equal( SERIAL(new Date(1900, 0, 1)), 2, 'Should be 2');
  t.equal( SERIAL(new Date(1900, 1, 1)), 33, 'Should be 33');
  t.equal( SERIAL(new Date(1900, 2, 1)), 61, 'Should be 61');
  t.equal( SERIAL(new Date(2000, 0, 1)), 36526, 'Should be 36526');
});
