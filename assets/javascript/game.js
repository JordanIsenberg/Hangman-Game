// Add this section to javascript file and reference it in the HTML

var wins = 0;
var losses = 0;
var halloweenWords = ['spooky', 'ghost', 'witches', 'cauldron', 'frankenstein', 'pumpkin', 'costume', 'vampire', 'bones', 'broomstick', 'ghoul', 'haunted', 'mummy', 'scream', 'shadow', 'warlock', 'werewolf', 'skeleton', 'zombie', 'decorations', 'candy', 'coffin', 'superstition', 'monsters', 'wizard'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(alphabet);


// SET UP GAME
function beginGame() {
	// Start the game on key up
	var randomIndex = Math.floor(Math.random()*halloweenWords.length);
	var word = halloweenWords[randomIndex];

	var guessRemain = 9;
	var lettersGuessed = '';
	var substring = '_';
	var blankWord = '';


	// Initialize empty current-word with underline for each letter of the hangman word
	for (i = 0; i < word.length; i++) {
		blankWord = blankWord + '_';
	}

	// Set blankWord as an array for easy replacement
	var arrayBlankWord = [];
	// var blankWord = arrayBlankWord.join('');

	console.log(blankWord);
	console.log(arrayBlankWord);
	document.getElementById("Current-Word").innerHTML = "Current Word: " + arrayBlankWord;
	document.getElementById("Guesses-Remaining").innerHTML = "Number of Guesses Remaining: " + guessRemain;

	// GAME BEGINS!
	// Function to check if Letters are already guess and if they are in the alphabet
	function isLetterAlreadyGuessed(userGuess) {
		return lettersGuessed.includes(userGuess) && alphabet.indexOf(userGuess) > -1;
	}

	function isLetterInWord(userGuess) {
		return word.includes(userGuess);
	}
	// Function checks to see if the current work has an blanks or underlines (the word is solved)
	function isWordGuessed(substring) {
		return arrayBlankWord.includes('_') === -1;
	}

	function writeCurrentWord(arrayBlankWord) {
		drawnWord = '';
		for (i in word) {
			drawnWord = arrayBlankWord[i] + ' ';
		}
		// empty string built up with space or underline or letter if it has been guessed
	}

	function constructArrayBlanks() {
		arrayBlankWord = [];
		for (j in word) {
				if (lettersGuessed.includes(word[j])) {
					console.log("There's a match");
					// Replace blanks with guessed letter
					arrayBlankWord[j] = word[j];
				} else {
					arrayBlankWord[j] = "_";
				}
			}
	}

	document.onkeyup = function(event) {
		// Letter guessed
		var userGuess = event.key;
		console.log(userGuess);

		if (!isLetterAlreadyGuessed(userGuess)) {
			lettersGuessed = lettersGuessed + userGuess + ' ';
			// Logging the Letters Guessed
			if(isLetterInWord(userGuess)) {
				constructArrayBlanks();
				writeCurrentWord(arrayBlankWord);
			} else {
				guessRemain = guessRemain - 1;
			}
				
			console.log(lettersGuessed);			
			// Loop through word to see if user guess matches any letters within the string, then replace it					
			
		}
		// Test for Win
		if (isWordGuessed()) {
			wins = wins + 1;
		}
		// Add Losing Qualifier
		else if (guessRemain === 0) {
			losses = losses + 1;
		}

	document.getElementById("Letters-Guessed").innerHTML = "Letters Guessed: " + lettersGuessed;
	// Update the current word with blanks
	document.getElementById("Current-Word").innerHTML = "Current Word: " + drawnWord;
	document.getElementById("Guesses-Remaining").innerHTML = "Number of Guesses Remaining: " + guessRemain;
	document.getElementById("Wins").innerHTML = "Wins: " + wins;
	document.getElementById("Losses").innerHTML = "Losses: " + losses;
	}
}

document.getElementById("new-game").onclick = beginGame();