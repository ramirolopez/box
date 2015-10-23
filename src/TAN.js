import ISNUMBER from './ISNUMBER';
import error from './ERRORS';

export default function TAN(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.tan(value);

}
