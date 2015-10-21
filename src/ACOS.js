import ISNUMBER from 'formula-isnumber';
import error from 'formula-errors';

export default function ACOS(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.acos(value);

}
