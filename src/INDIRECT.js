/* Returns a cell indirection
 */
import CELL from 'formula-cell';

export function INDIRECT(ref) {
  console.log( this )
  return CELL.apply(this, [ref]);
}
