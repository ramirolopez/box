import ISNUMBER from './ISNUMBER';
import error from './ERROR';

export default function ABS(value) {
  if (!ISNUMBER(value)) {
    return error.value;
  }
  return Math.abs(value);
}
