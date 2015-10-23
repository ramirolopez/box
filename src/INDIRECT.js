/* Returns a cell indirection
 */
import CELL from './CELL';

export default function INDIRECT(ref) {
  console.log( this )
  return new CELL(this, ref.index);
}
