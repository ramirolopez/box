
import FLATTEN from './FLATTEN';

export default function SUM() {
    var numbers = FLATTEN(arguments);
    return numbers.reduce((a, b) => a + b);
}
