/* The filter an array or a range by a set of filters */

export function FILTER(range, ...filters) {

  // A filter is an array of true/false values.
  // The filter may be for rows or for columns but not both.
  // A array filter may only filter a range that covers a single row or a single column.

  function makeFilter() {
    return (value, index) => {
      return filters.reduce( ( previousValue, currentValue ) => {
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
