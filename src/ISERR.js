
import error from './ERROR';

export default function(value) {
  return (
    value !== error.na && (
      value.constructor.name === 'Error' ||
      typeof(value) === 'number' && (Number.isNaN(value) || !isFinite(value)))
    );
  }
