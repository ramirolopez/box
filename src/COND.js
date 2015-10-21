// COND.js -
// SYNTAX( condition1, result_if_true [, condition2, result_if_true] )

export default function COND(...cases) {
  for (var i = 0; i < cases.length; i = i+2) {
    var a = cases[i],
	b = cases[i+1];

    if (i === cases.length - 1 && typeof b === 'undefined') {
      return a;
    } else {
      if (a) { return b; }
    }
  }
  return undefined;
}
