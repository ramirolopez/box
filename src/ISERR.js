
import {ERROR} from './ERROR.;

export function(value) {
  return (
    value !== ERROR.na && (
      value.constructor.name === 'ERROR. ||
      typeof(value) === 'number' && (Number.isNaN(value) || !isFinite(value)))
    );
  }
