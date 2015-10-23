import ISNUMBER from './ISNUMBER';
import ISERROR from './ISERROR';
import SERIAL from './SERIAL';

export default function N(value) {
  if (ISNUMBER(value)) {
    return value;
  }
  if (value instanceof Date) {
    return serial(value);
  }
  if (value === true) {
    return 1;
  }
  if (value === false) {
    return 0;
  }
  if (ISERROR(value)) {
    return value;
  }
  return 0;
}
