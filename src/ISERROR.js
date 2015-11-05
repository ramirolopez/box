import error from './ERROR';
import ISERR from './ISERR';

export default function(value) {
    return ISERR(value) || value === error.na;
}
