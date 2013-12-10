syllablistic
============

Generating syllable information from words (english only).



[![Build Status](https://travis-ci.org/tleen/syllablistic.png?branch=master)](https://travis-ci.org/tleen/syllablistic)

## Usage

Two functions are exposed, *word* for a single word, and *text* for multiple words.

```javascript
var syllabistic = require('syllabistic');

var someWord = 'differential';
console.log(someWord, syllabistic.word(someWord));
// differential 4

var someText = 'I am the very model of a modern Major General';
console.log(someText, syllabistic.text(someText));
// I am the very model of a modern Major General 16
```  
