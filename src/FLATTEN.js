
import ISARRAY from './ISARRAY';

export default function FLATTEN(ref){
    return ref.reduce(function(a, b) {
      return a.concat(b);
    }, []);
}
