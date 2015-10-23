var assert = require('assert');
var range = require('formula-range')
var cell = require('formula-cell')
var sheet = require('formula-sheet')
var mySheet = new sheet()
var isref = require('./ISREF');

describe('isref', function() {
  it('should identify range as ref', function() {
    assert( isref( new range(mySheet, 0, 1) ) );
  })
  it('should identify cell as ref', function() {
    assert( isref( new cell(mySheet, 1) ) );
  })
})
