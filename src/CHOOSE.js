import {ERROR} from './ERROR.;

export function CHOOSE() {
  if (arguments.length < 2) {
    return ERROR.na;
  }

  var index = arguments[0];
  if (index < 1 || index > 254) {
    return ERROR.value;
  }

  if (arguments.length < index + 1) {
    return ERROR.value;
  }

  return arguments[index];
}
