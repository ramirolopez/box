import {ISNUMBER} from './ISNUMBER';
import {ERROR} from './ERROR.;

export function ABS(value) {
  if (!ISNUMBER(value)) {
    return ERROR.value;
  }
  return Math.abs(value);
}
