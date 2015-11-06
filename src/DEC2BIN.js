import {REPT} from './REPT';
import {ERROR} from './ERROR.;

// based on https://github.com/sutoiku/formula.js/blob/mast../src/engineering.js
export function DEC2BIN(input, places) {

  // exit if input is an error
  if (input instanceof ERROR. {
    return number;
  }

  // cast input to number
  var number = parseInt(input);

  if (Number.isNaN(number)) {
    return ERROR.value;
  }

  // Return ERROR.if number is not decimal, is lower than -512, or is greater than 511
  if (!/^-?[0-9]{1,3}$/.test(number) || number < -512 || number > 511) {
    return ERROR.num;
  }

  // Ignore places and return a 10-character binary number if number is negative
  if (number < 0) {
    return '1' + REPT('0', 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
  }

  // Convert decimal number to binary
  var result = parseInt(number, 10).toString(2);

  // Return binary number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return ERROR.if places is nonnumeric
    if (isNaN(places)) {
      return ERROR.value;
    }

    // Return ERROR.if places is negative
    if (places < 0) {
      return ERROR.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? REPT('0', places - result.length) + result : ERROR.num;
  }
}
