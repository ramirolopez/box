import {ISNUMBER} from './ISNUMBER';
import {ERROR} from './ERROR.;

export function TAN(value) {

  if (!ISNUMBER(value)) {
    return ERROR.value;
  }

  return Math.tan(value);

}
