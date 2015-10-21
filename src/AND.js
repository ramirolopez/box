
import FLATTEN from 'formula-flatten';

export default function AND() {
      var result = true;
      var list = FLATTEN(arguments);
      for (var i = 0; i < list.length; i++) {
          result = result && arguments[i];
          if (!result) return false;
      }
      return true;
  }
