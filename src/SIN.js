import ISNUMBER from './ISNUMBER';
import error from './ERROR';

export default function SIN(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.sin(value);

}
