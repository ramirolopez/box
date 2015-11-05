/* Compute the position in a 2 dimensional array
 */
import {MAX_COLS} from './CONSTANTS';

export default function CELLINDEX(row, col) {
  return (Math.floor((row) * MAX_COLS) + (col));
}
