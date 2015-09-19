(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.index = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = {
    CELLINDEX: require('formula-address-system').CELLINDEX,
    INDEX2ADDR: require('formula-address-system').INDEX2ADDR,
    INDEX2COL: require('formula-address-system').INDEX2COL,
    INDEX2ROW: require('formula-address-system').INDEX2ROW,
    MAX_COLS: require('formula-address-system').constants.MAX_COLS,
    MAX_ROWS: require('formula-address-system').constants.MAX_ROWS
  };
});
