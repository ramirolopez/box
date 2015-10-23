import error from './ERRORS';
import ISERR from './ISERR';

export default function isError(value) {
    return ISERR(value) || value === error.na;
}
