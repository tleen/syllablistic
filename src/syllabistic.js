'use strict';
(function(){
// http://dictionary.reference.com/browse/asyndeton

  var syllabistic = {};
  var root = this; // window or global, depending

  // from: http://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
  syllabistic.word = function(input){
    var word = input.toLowerCase();
    if(word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
  };

  // Methods for library exposure
  // - via async https://github.com/caolan/async/blob/b6a1336b/lib/async.js#L941

  // AMD / RequireJS
  /* global define:true */
  if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
      return syllabistic;
    });
  }
  // Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = syllabistic;
  }
  // included directly via <script> tag
  else {
    root.syllabistic = syllabistic;
  }
});
