// initialize important game variables
var Word = require('./Word');
var inquirer = require("inquirer");
var wordsList = ["reagan", "bush", "lincoln", "washington", "jefferson", "monroe", "trump"];
var letterIsGuessed = false;
var gameOver = false;
var guessCount = 9; 
var assignWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
var newWord = new Word(assignWord);
var getLetters = newWord.assignLetters();

console.log(getLetters);

console.log("--------------------------");
console.log("WELCOME TO HANGMAN PRESIDENTIAL STYLE")
console.log("--------------------------");
    
function startGame () {
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
		var displayedWord = ""; 
        
        for (i = 0; i < newWord.wordLetters.length; i++){

			if (userEntry == newWord.wordLetters[i].letter) {
				newWord.wordLetters[i].visible = true;
				letterIsGuessed = true;
			}

			if (newWord.wordLetters[i].visible === true) {
			    displayedWord = displayedWord + newWord.wordLetters[i].letter;
			    
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

function endGame () {
			var correctLetters = 0;

			for (i = 0; i < newWord.wordLetters.length; i++){ 
				if (newWord.wordLetters[i].visible == true){
					correctLetters++;
					if (correctLetters === newWord.wordLetters.length){
						gameOver = true;
						console.log("Wow! You know your presidents!");
						makeNewWord();
						startGame();
					}
	
				}
				
            };		
            		
			if (guessCount === 0) {
					gameOver = true;
					guessCount = 9;
					startGame();

			}

			else if (gameOver === false){
				startGame();
			}
        };	

function makeNewWord () {
    assignWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    newWord = new Word(assignWord);
	getLetters = newWord.assignLetters();
}

startGame();