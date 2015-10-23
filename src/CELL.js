import INDEX2COL from './INDEX2COL';
import INDEX2ROW from './INDEX2ROW';

/* Structure for CELL reference
 */
export default class CELL {

  /* Accepts a reference to sheet and cell index
   */
  constructor(sheet, index) {
    if (sheet.constructor.name !== 'SHEET') {
      throw Error('sheet is expected to be SHEET class');
    }
    
    this.sheet = sheet;
    this.index = index;
  }

  /* Returns object with row/col
   */
  getRow() {
    return INDEX2ROW(this.cellIndex);
  }

  getColumn() {
    return INDEX2COL(this.cellIndex);
  }

  valueOf() {
    return sheet.data[this.cellIndex];
  }
}
