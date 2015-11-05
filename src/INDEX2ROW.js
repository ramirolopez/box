/* Isolate the row from a cell index */
import {MAX_COLS} from './CONSTANTS';

export default function(index) {
  return Math.floor(index / MAX_COLS);
}
