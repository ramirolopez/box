/* A worksheet is an array from 0 to the maximum cell index.
 */
export default class SHEET {
  constructor(name) {
    this.name = name;
    this.data = [];
  }
}
