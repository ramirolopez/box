/* Isolate the column from a cell index */
import {MAX_COLS} from './CONSTANTS';
import INDEX2ROW from './INDEX2ROW';

export default function(index) {
  return index - (INDEX2ROW(index) * MAX_COLS);
}
