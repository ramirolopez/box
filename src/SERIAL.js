import {d1900, MilliSecondsInDay} from './CONSTANTS';
import error from './ERROR'

// Convert a date object into a serial number.
// Credit: https://github.com/sutoiku/formula.js/
export default function(date) {
    if (date.constructor.name !== 'Date') return error.na;
    return Math.ceil((date - d1900) / MilliSecondsInDay) + ((date > -2203891200000)?2:1);
}
