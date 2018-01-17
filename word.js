var letter = require('./Letter');

var Word = function(gameWord) {
  this.word = gameWord; 
  this.assignLetters = function () {
      for (var i = 0; i < gameWord.length; i++) {
        var letterObject = new Letter(this.word[i]); 
        wordLetters.push(letterObject);
      };
    };
};	

module.exports = Word;