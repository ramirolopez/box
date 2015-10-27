import INDEX2COL from './INDEX2COL';
import INDEX2ROW from './INDEX2ROW';

/* Structure for CELL reference
 */
export default class CELL {

  /* Accepts a reference to sheet and cell index
   */
  constructor(index) {
    this.index = index;
  }

  /* Returns rowIndex 
   */
  getRow() {
    return INDEX2ROW(this.index);
  }

  /* Return columnIndex
   */
  getColumn() {
    return INDEX2COL(this.index);
  }

}
