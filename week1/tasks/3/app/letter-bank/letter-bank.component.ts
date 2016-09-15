import { Component, Output, EventEmitter, Input } from '@angular/core'
import { DataSource } from '../shared/DataSource'
import { LogDecorator } from '../shared/LogDecorator'

@Component({
	moduleId: module.id,
	selector: 'letter-bank',
	templateUrl: 'letter-bank.component.html',
	styleUrls: ['letter-bank.component.css']
})
export class LetterBank {
	@Input() word: string;
	@Input() dataSource: DataSource;

	hiddenLetters:string[];
	guessedLetters:string[];
	displayedLetters:string[];

	totalLetters: number = 8;
	numberHiddenLetters: number = 3;
	numberGuessableLetters: number;

	@Output('user-guessed')
	guessEmitter = new EventEmitter();

	constructor() {
		this.numberGuessableLetters = this.totalLetters - this.numberHiddenLetters;
	}

	onWordChanged() {
		this.hiddenLetters = [];
		this.guessedLetters = [];

		this.addAdditionalCharsToGuess(this.numberGuessableLetters);

		this.displayedLetters = this.hiddenLetters.slice();
	}

	letterGuessedCorrect(letter) {
		var letterIsInWord = this.letterInWord(letter);
		var letterIsGuessed = this.guessedLetters.indexOf(letter) !== -1;
		return letterIsInWord && letterIsGuessed;
	}

	letterGuessedIncorrect(letter) {
		var letterIsInWord = this.letterInWord(letter);
		var letterIsGuessed = this.guessedLetters.indexOf(letter) !== -1;
		return !letterIsInWord && letterIsGuessed;
	}

	letterInWord(letter):boolean {
		return this.word.indexOf(letter) !== -1;
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

	@LogDecorator
	guessWithChar(char:string) {
		if (this.gameOver) {
			return;
		}

		this.guessedLetters.push(char);

		var foundIndex = this.hiddenLetters.indexOf(char);
		if (foundIndex !== -1) {
			this.guessEmitter.emit({
				correct: true,
				guessedLetterCount: this.guessedLetters.length,
				guessedLetters: this.guessedLetters,
				hiddenLettersCount: this.hiddenLetters.length,
			});
			this.hiddenLetters.splice(foundIndex, 1);
		}
		else {
			// incorrect
			this.guessEmitter.emit({
				correct: false,
				guessedLetterCount: this.guessedLetters.length,
				guessedLetters: this.guessedLetters,
				hiddenLettersCount: this.hiddenLetters.length,
			});
		}
	}
}