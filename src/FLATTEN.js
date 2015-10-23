
import ISARRAY from './ISARRAY';

export default function FLATTEN(ref){
    return ref.reduce(function(a, b) {          
        if (ISARRAY(a)) {
            return a.concat(b);
        } else {
            return [a].concat(b);
        }
    });
}
