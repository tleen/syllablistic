// 'use strict'; - won't pass due to potential prblem with the use of 'this' in function invocation
(function(){

  var syllabistic = {};
  var root = this; // window or global, depending

  // from: http://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
  syllabistic.word = function(input){
    var word = input.toLowerCase().trim();
    if(!word){ return 0; }
    if(word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    var syllbs = word.match(/[aeiouy]{1,2}/g);
    return (syllbs ? syllbs.length : 0);
  };

  syllabistic.text = function(input){
    var count = 0;
    var components = input.split(/[\W]+/);
    var len = components.length;
    for(var i = 0; i < len; i++) count = (count + syllabistic.word(components[i]));
    return count;
  };


  // Methods for library exposure
  // - via async https://github.com/caolan/async/blob/b6a1336b/lib/async.js#L941

  // AMD / RequireJS
  /* global define */

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
}).call(this);
