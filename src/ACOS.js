import {ISNUMBER} from './ISNUMBER';
import {ERROR} from './ERROR.;

export function ACOS(value) {

  if (!ISNUMBER(value)) {
    return ERROR.value;
  }

  return Math.acos(value);

}
