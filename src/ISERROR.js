import {ERROR} from './ERROR.;
import {ISERR} from './ISERR';

export function(value) {
    return ISERR(value) || value === ERROR.na;
}
