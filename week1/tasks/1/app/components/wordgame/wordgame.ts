import { Component } from '@angular/core'
import { DataSource } from './DataSource'

@Component({
	moduleId: module.id,
	selector: 'wordgame',
	templateUrl: 'wordgame.html',
	styleUrls: ['wordgame.css']
})
export class WordGame {
	private dataSource: DataSource;
	private word:string;
	private displayedWord:string;
	private hiddenLetters:string[];
	private guessedLetters:string[];
	private displayedLetters:string[];
	private gameOver:boolean;
	private alphabet:string;

	constructor() {
		this.dataSource = new DataSource();
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
		this.startNewGame();
	}

	startNewGame() {
		this.hiddenLetters = [];
		this.guessedLetters = [];
		this.gameOver = false;

		var totalLetters = 8;
		var numberHiddenLetters = 3;
		var numberGuessableLetters = totalLetters - numberHiddenLetters;

		this.word = this.dataSource.getRandomWord();
		this.displayedWord = this.word;
		this.partiallyHideWord(numberHiddenLetters);
		this.addAdditionalCharsToGuess(numberGuessableLetters);

		this.displayedLetters = this.hiddenLetters.slice();
	}

	partiallyHideWord(maxNumberOfHiddenLetters?:number) {
		var word = this.word;
		maxNumberOfHiddenLetters = maxNumberOfHiddenLetters || Math.floor(word.length / 2);
		var randomNumberOfHiddenLetters = Math.floor(Math.random() * maxNumberOfHiddenLetters) + 1;

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

	getRandomAlphabetChar() {
		var index = Math.floor(Math.random() * this.alphabet.length) + 1;
		return this.alphabet[index];
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
			let char = this.getRandomAlphabetChar();
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
			this.gameOver = true;
		}
	}

	stringReplaceCharAt(text:string, index:number, character:string) {
	    return text.substr(0, index) + character + text.substr(index+character.length);
	}

	guessWithChar(char:string) {
		this.guessedLetters.push(char);

		var foundIndex = this.hiddenLetters.indexOf(char);
		if (foundIndex !== -1) {
			this.hiddenLetters.splice(foundIndex, 1);
			this.regenerateDisplayedWord();
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