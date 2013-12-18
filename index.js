'use strict';


var S = require('string');

// from: http://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
function unit(input){
  var word = S(input).stripPunctuation().s.toLowerCase().trim();
  if(!word){ return 0; }
  if(word.length <= 3) { return 1; }
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  var syllbs = word.match(/[aeiouy]{1,2}/g);
  return (syllbs ? syllbs.length : 0);
}

function text(input){
  var count = 0;
  var components = input.split(/[\W]+/);
  var len = components.length;
  for(var i = 0; i < len; i++){
    count = (count + unit(components[i]));					
  }
  return count;
}
  
module.exports = {
  word : unit,
  text : text
};
