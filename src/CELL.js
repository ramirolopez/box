import {INDEX2COL} from './INDEX2COL';
import {INDEX2ROW} from './INDEX2ROW';

/* Structure for CELL reference
*/
export function CELL(index) {
  return {
    /* Returns rowIndex
    */
    getRow: function() {
      return INDEX2ROW(index);
    },

    /* Return columnIndex
    */
    getColumn: function() {
      return INDEX2COL(index);
    }
  }
}
