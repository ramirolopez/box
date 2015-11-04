/* The filter an array or a range by a set of filters */

export default function FILTER(range, ...filters) {
  // TBD: Need to filter range by filters.
  // A filter may be either a function or an array of true/false values.
  // The filter may be for rows or for columns but not both.
  // A array filter may only filter a range that covers a single row or a single column.

  function makeFilter() {
    return (value, index) => {
      return filters.reduce( (previousValue, currentValue, filterIndex) => {
        if (previousValue === false ) {
          return false;
        } else if (previousValue === true) {
          return currentValue[index];
        } else {
          return previousValue[index] && currentValue[index]
        }
      });
    }
  }

  return range.filter( makeFilter() )

}
