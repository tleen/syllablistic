'use strict';
/* jshint loopfunc: true */

var syllabistic = require('..');


describe('Library loads correctly', function(){
  it('Should have a .word function', function(){
    syllabistic.should.have.property('word');
  });
  it('Should have a .text function', function(){
    syllabistic.should.have.property('text');
  });

});


// array index is expected # of syllables
describe('Accurate results on test words', function(){
  var testWords = [
    ['', ' ', '   ', ' + ', '()', "\n", null],
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
	length.should.equal(result);
      });
    }
  }
});

describe('Accurate results on test sentences', function(){
  var sentences = [
    {
      sentence : '',
      count : 0,
      precision : 0
    },    
    {
      sentence : 'the',
      count : 1,
      precision : 0
    },
    {
      sentence : 'seven fuzzy bears',
      count : 5,
      precision : 0
    },
    {
      sentence : 'four coders walked into a bar',
      count : 8,
      precision : 0
    },
    {
      sentence : 'What\'s the frequency Kenneth?',
      count : 8,
      precision : 0
    },    
    {
      sentence : 'I saw the best minds of my generation destroyed by madness, starving hysterical naked, dragging themselves through the negro streets at dawn looking for an angry fix',
      count : 42,
      precision : 4
    },
    {
      sentence : 'angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night, who poverty and tatters and hollow-eyed and high sat up smoking in the supernatural darkness of cold-water flats floating across the tops of cities contemplating jazz',
      count : 78,
      precision : 4
    },
    {
      sentence : 'who bared their brains to Heaven under the El and saw Mohammedan angels staggering on tenement roofs illuminated, who passed through universities with radiant cool eyes hallucinating Arkansas and Blake-light tragedy among the scholars of war',
      count : 66,
      precision : 4
    },
    {
      sentence : 'who were expelled from the academies for crazy & publishing obscene odes on the windows of the skull, who cowered in unshaven rooms in underwear, burning their money in wastebaskets and listening to the Terror through the wall',
      count : 59,
      precision : 4
    },
    {
      sentence : 'who got busted in their pubic beards returning through Laredo with a belt of marijuana for New York, who ate fire in paint hotels or drank turpentine in Paradise Alley, death, or purgatoried their torsos night after night',
      count : 60,
      precision : 4
    }
  ];

  // at this level of text we will allow for a little variation in results (via precision)
  for(var i = 0; i < sentences.length; i++){
    it('"' + sentences[i].sentence + '" should have ' + sentences[i].count + ' syllables (+/- ' + sentences[i].precision + ')', function(sentence, count, precision){
      return function(){
	var result = syllabistic.text(sentence);
	if(precision === 0) result.should.equal(count);
	else result.should.be.above(count - precision).and.below(count + precision); 
      };
    }.call(undefined, sentences[i].sentence, sentences[i].count, sentences[i].precision));
  }

});
