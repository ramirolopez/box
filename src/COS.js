import {ISNUMBER} from './ISNUMBER';
import {ERROR} from './ERROR.;

export function COS(value) {

  if (!ISNUMBER(value)) {
    return ERROR.value;
  }

  return Math.cos(value);

}
