import {ISNUMBER} from './ISNUMBER';
import {ERROR} from './ERROR.;

export function SIN(value) {

  if (!ISNUMBER(value)) {
    return ERROR.value;
  }

  return Math.sin(value);

}
