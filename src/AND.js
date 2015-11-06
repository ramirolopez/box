// Logical AND reduction
//
// Author: Peter Moresi
//
// Any list of criteria can be flattened out to a truthy value.
export default function AND(...criteria) {
  return criteria.reduce( (previousValue, currentValue) => {
    // no, I didn't forget about ===. I explicitly want to use JS type coersion.
    if (previousValue == false) return false
    return currentValue;
  }, true);
}
