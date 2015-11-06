// Logical OR operation

export default function OR(...criteria) {
  return criteria.reduce( (a, b) => {
    // I didn't forget about ===. I want to use JS type coersion.
    if (a == true) return true;
    return b;
  }, false)
}
