import ISNUMBER from './ISNUMBER';
import error from './ERRORS';

export default function COS(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.cos(value);

}
