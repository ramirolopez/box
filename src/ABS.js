import ISNUMBER from './ISNUMBER';
import error from './ERRORS';

export default function ABS(value) {
  if (!ISNUMBER(value)) {
    return error.value;
  }
  return Math.abs(value);
}
