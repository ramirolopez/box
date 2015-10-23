import ISNUMBER from './ISNUMBER';
import error from './ERRORS';

export default function ACOS(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.acos(value);

}
