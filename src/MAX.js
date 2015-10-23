
import FLATTEN from './FLATTEN';

export default function max() {
    FLATTEN( arguments ).reduce((max, next) => {
        if (typeof x !== 'number' || x !== x) {
            return max;
        }

        return Math.max(max, next);
    });
}
