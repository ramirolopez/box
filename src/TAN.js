import ISNUMBER from 'formula-isnumber';
import error from 'formula-errors';

export default function TAN(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.tan(value);

}
