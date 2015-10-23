/*
 * A range represents a fragment of a worksheet.
 * It is defined as two points in a flat worksheet array.
 *
 * Use address system to convert row/col to cell indexes.
 */


import CELLINDEX from './CELLINDEX';
import INDEX2COL from './INDEX2COL';
import INDEX2ROW from './INDEX2ROW';

export default class RANGE {

  /* The constructor captures top left and bottom right cell indexes.
   */
  constructor(topLeft, bottomRight, name='') {
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
    this.name = name;
    this.length = this.cells().length;
  }

  /* Determine if cellIndex is within range
   */
  hit(cellIndex) {
    // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
    return ((this.topLeft <= cellIndex) &&
            (cellIndex <= this.bottomRight));
  }

  /* Return the top left cell
   */
  topLeftCell() {
    return 
  }
  
  /* Return the first column
   */
  topColumn() {
    return INDEX2COL(this.topLeft);
  }

  /* Return the first row
   */
  topRow() {
    return INDEX2ROW(this.topLeft);
  }

  /* Return the bottom column
   */
  bottomColumn() {
    return INDEX2COL(this.bottomRight);
  }

  /* Return the bottom row_num
   */
  bottomRow() {
    return INDEX2ROW(this.bottomRight);
  }

  /* Returns an array with the data
   */
  data() {
    return this.cells().map((n) => n ? n.valueOf() : undefined );
  }

  /* Return a list of cells
   */
  cells() {
    var start = typeof this.topLeft === 'function' ? this.topLeft() : this.topLeft,
        end = typeof this.bottomRight === 'function' ? this.bottomRight() : this.bottomRight,
	that = this;
    
    return Array.apply(start, Array(end+1)).map(function (x, y) {
      return y; 
    });
  }

  /* Return a list of rows
   */
  rows() {
    var self = this;
    return Array.apply(this.topRow(), Array(this.bottomRow()+1)).map(function (x, row) {
      return Array.apply(self.topColumn(), Array(self.bottomColumn()+1)).map(function (x, col) {
        return [CELLINDEX(col, row)];
      })
    })
  }

  /* Implements a filter a set of rows */
  filter(f) {
    this.rows()
  }

}
