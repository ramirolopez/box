
import FLATTEN from './FLATTEN';

export default function AND(...criteria) {
      var result = true;
      var list = FLATTEN(criteria);
      for (var i = 0; i < list.length; i++) {
          result = result && criteria[i];
          if (!result) return false;
      }
      return true;
  }
