import { Component } from '@angular/core'
import { DataSource } from './DataSource'

@Component({
	moduleId: module.id,
	selector: 'wordgame',
	templateUrl: 'wordgame.html',
	styleUrls: ['wordgame.css']
})
export class WordGame {
	dataSource: DataSource;
	word:string;
	displayedWord:string;
	hiddenLetters:string[];
	guessedLetters:string[];
	displayedLetters:string[];
	gameOver:boolean;

	wordsCorrect: string[];
	wordsFailed: string[];

	guessesDifficultyModifier: number;
	allowedGuesses: number;

	showSummary:boolean;
	difficultySelected: boolean;

	correctGuesses: number;
	incorrectGuesses: number;

	countdownTimer: any;
	timerLimitSec: number;
	currentTime: number;

	constructor() {
		this.dataSource = new DataSource();
		this.guessesDifficultyModifier = 5;
		this.difficultySelected = false;
	}

	selectDifficulty(diff) {
		var modifier = 5,
			timer = 60;
		switch (diff) {
			case "Beginner":
				modifier = 5;
				timer = 60;
				break;
			case "Intermediate":
				modifier = 4;
				timer = 40;
				break;
			case "Advanced":
				modifier = 2;
				timer = 20;
				break;
		}
		this.guessesDifficultyModifier = modifier;
		this.difficultySelected = true;
		this.timerLimitSec = timer;
		this.startNewGame();
	}

	startNewGame() {
		this.wordsCorrect = [];
		this.wordsFailed = [];
		this.nextWord();
	}

	nextWord() {
		clearInterval(this.countdownTimer);

		this.hiddenLetters = [];
		this.guessedLetters = [];
		this.gameOver = false;
		this.showSummary = false;
		this.currentTime = 0;

		this.correctGuesses = 0;
		this.incorrectGuesses = 0;

		var totalLetters = 8;
		var numberHiddenLetters = 3;
		var numberGuessableLetters = totalLetters - numberHiddenLetters;

		this.allowedGuesses = numberHiddenLetters + this.guessesDifficultyModifier;

		this.word = this.dataSource.getRandomWord();

		if (!this.word) {
			this.presentSummary();
		}
		else {
			this.displayedWord = this.word;
			this.partiallyHideWord(numberHiddenLetters);
			this.addAdditionalCharsToGuess(numberGuessableLetters);

			this.displayedLetters = this.hiddenLetters.slice();
		}

		this.countdownTimer = setInterval(function(){
			this.currentTime++;
			if (this.currentTime >= this.timerLimitSec) {
				this.gameCompleted(false);
				clearInterval(this.countdownTimer);
			}
		}.bind(this), 1000);
	}

	presentSummary() {
		this.showSummary = true;
	}

	partiallyHideWord(maxNumberOfHiddenLetters?:number) {
		var word = this.word;
		maxNumberOfHiddenLetters = maxNumberOfHiddenLetters || Math.floor(word.length / 2);
		var randomNumberOfHiddenLetters = maxNumberOfHiddenLetters;

		while (randomNumberOfHiddenLetters > 0) {
			var randomIndex = Math.floor(Math.random() * this.displayedWord.length);
			let letter = this.displayedWord[randomIndex];
			if (letter !== '_') {
				this.hiddenLetters.push(letter);
				this.displayedWord = this.stringReplaceCharAt(this.displayedWord, randomIndex, '_');
			}
			else {
				// try another random index
				continue;
			}
			randomNumberOfHiddenLetters--;
		}
	}

	shuffleArray(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	    return a;
	}

	addAdditionalCharsToGuess(count:number) {
		while(count > 0) {
			let char = this.dataSource.getRandomAlphabetChar();
			if (this.hiddenLetters.indexOf(char) !== -1) {
				continue;
			}
			this.hiddenLetters.push(char);
			count--;
		}
		this.hiddenLetters = this.shuffleArray(this.hiddenLetters);
	}

	regenerateDisplayedWord() {
		for (let i = 0; i < this.word.length; ++i) {
			let char = this.word[i];
			let charGuessed = this.guessedLetters.indexOf(char) !== -1;
			if (charGuessed) {
				this.displayedWord = this.stringReplaceCharAt(this.displayedWord, i, char);
			}
		}

		if (this.displayedWord.indexOf('_') === -1) {
			this.gameCompleted(true);
			
		}
	}

	gameCompleted(won) {
		this.gameOver = true;
		if (won) {
			this.wordsCorrect.push(this.word);
		}
		else {
			this.wordsFailed.push(this.word);
		}
		this.dataSource.markWordAsUsed(this.word);
	}

	stringReplaceCharAt(text:string, index:number, character:string) {
	    return text.substr(0, index) + character + text.substr(index+character.length);
	}

	guessWithChar(char:string) {
		if (this.gameOver) {
			return;
		}

		this.guessedLetters.push(char);

		var foundIndex = this.hiddenLetters.indexOf(char);
		if (foundIndex !== -1) {
			this.correctGuesses++;
			this.hiddenLetters.splice(foundIndex, 1);
			this.regenerateDisplayedWord();
		}
		else {
			// incorrect
			this.incorrectGuesses++;
		}

		if (this.incorrectGuesses > this.hiddenLetters.length) {
			this.gameCompleted(false);
		}

		var wordGuessed = this.displayedWord.indexOf('_') === -1;

		if (this.guessedLetters.length >= this.allowedGuesses && !wordGuessed) {
			this.gameCompleted(false);
		}
	}

	letterGuessedCorrect(letter) {
		var letterIsInWord = this.word.indexOf(letter) !== -1;
		var letterIsGuessed = this.guessedLetters.indexOf(letter) !== -1;
		return letterIsInWord && letterIsGuessed;
	}

	letterGuessedIncorrect(letter) {
		var letterIsInWord = this.word.indexOf(letter) !== -1;
		var letterIsGuessed = this.guessedLetters.indexOf(letter) !== -1;
		return !letterIsInWord && letterIsGuessed;
	}
}