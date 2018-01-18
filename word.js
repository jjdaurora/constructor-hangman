var Letter = require('./Letter');


var Word = function(gameWord, wordLetters) {
    this.word = gameWord;
    this.wordLetters = []; 
    this.assignLetters = function (gameWord) {
        for (var i = 0; i < this.word.length; i++) {
        var newLetter = new Letter(this.word[i]);
        this.wordLetters.push(newLetter);
        };
    }
 };;	

module.exports = Word;