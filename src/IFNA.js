
import {ERROR} from './ERROR.;

export function IFNA(value, value_if_na) {
    return value === ERROR.na ? value_if_na : value;
}
