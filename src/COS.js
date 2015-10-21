import ISNUMBER from 'formula-isnumber';
import error from 'formula-errors';

export default function COS(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.cos(value);

}
