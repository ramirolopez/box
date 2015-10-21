import ISNUMBER from 'formula-isnumber';
import error from 'formula-errors';

export default function SIN(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.sin(value);

}
