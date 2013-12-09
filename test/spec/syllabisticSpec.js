'use strict';
/* global syllabistic, describe, it, expect  */
/* jshint loopfunc: true */

describe('Library loads correctly', function(){
  it('Should have a .word function', function(){
    expect(typeof syllabistic.word).toEqual('function');
  });
});


// array index is expected # of syllables
describe('Accurate results on test words', function(){
  var testWords = [
    ['', ' ', '   ', ' + ', '()'],
    ['a', 'b', 'c', 'an', 'to', 'of', 'me', 'foo', 'bar', 'baz'],
    ['zero', 'endless', 'deeper', 'contest', 'honey', 'sentence'],
    ['fortunate', 'lunatic', 'comparable', 'generally', 'literature'],
    ['category', 'arbitary', 'delicacy', 'eligible', 'preferable'],
    ['capitalism', 'figuratively', 'cannibalism', 'communicative'],
    ['unexceptionable', 'individualism', 'indistinguishable', 'availability'],
    ['intelligibility', 'invulnerability', 'irresponsibility', 'unconventionality']
  ];
  
  for(var i = 0; i < testWords.length; i++){
    var words = testWords[i];
    var length = i;
    for(var x = 0; x < words.length; x++){ 
      var word = words[x];
      it('"' + word + '" should have ' + length + ' syllables', function(){
	var result = syllabistic.word(word);
	expect(length).toEqual(result);
      });
    }
  }
});
