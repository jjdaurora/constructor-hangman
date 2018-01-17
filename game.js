// initialize important game variables
var Word = require('./Word');
var inquirer = require("inquirer");
var wordsList = ["REAGAN", "BUSH", "LINCOLN", "WASHINGTON", "JEFFERSON", "MONROE", "TRUMP"];
var wordLetters = []; 
var letterIsGuessed = false;
var gameOver = false;
var guessCount = 9;
var assignWord = wordsList[Math.floor(Math.random() * wordsList.length)];
var newWord = new Word(newWord);
 
function loopWrdOvrLtrs (newWord) {
      for (var i = 0; i < gameWord.length; i++) {
        var letterObject = new Letter(this.word[i]); 
        wordLetters.push(letterObject);
      };
    };

console.log("--------------------------");
console.log("WELCOME TO HANGMAN PRESIDENTIAL STYLE")
console.log("--------------------------");
    
function startUp () {
console.log("We've assigned you a new President to guess!")
    inquirer.prompt([
        {
            name: "input",
            message: "Guess a letter please.",
            validate: function(value) {
                if (value.length == 1 && value.match(/[a-z]/i)) {
                    return true;
                }
                else {
                    return "Please enter a letter."
                }
            }

        },
    ]).then(function(userEntry) {
     
		var userEntry = userEntry.input;
        var displayedWord = ''; 
        
        for (i = 0; i < wordLetters.length; i++){

			if (userEntry == wordLetters[i].letter) {
				wordLetters[i].isGuessed = true;
				letterIsGuessed = true;
			}

			if (wordLetters[i].isGuessed === true) {
			    displayedWord = displayedWord + wordLetters[i].letter;
			    
			}

            else {
				displayedWord += " _ "; 

			}
		}; 

		if (letterIsGuessed === true) {
			console.log("Nice!");
		}
		else {
			console.log("No, no that's not right.")
			guessCount--;
		}
		console.log(guessCount);
		console.log(displayedWord);

		letterIsGuessed = false;

		endGame();
	});		
};

function endGame (){
			var correctLetters = 0;

			for (i = 0; i < wordLetters.length; i++){ 
				if (wordLetters[i].isGuessed == true){
					correctLetters++;
					if (correctLetters === wordLetters.length){
						gameOver = true;
					}
				}
				
            };		
            		
			if (guessCount === 0) {
					gameOver = true;
			}

			else if (gameOver === false){
				startUp();
			}
        };	

startUp();