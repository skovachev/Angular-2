import { Component, Output, EventEmitter, Input, ViewChildren, QueryList } from '@angular/core'
import { DataSource } from '../shared/DataSource'
import { LogDecorator } from '../shared/LogDecorator'
import { Letter } from '../shared/letter/letter.component'

@Component({
	moduleId: module.id,
	selector: 'letter-bank',
	templateUrl: 'letter-bank.component.html',
	styleUrls: ['letter-bank.component.css']
})
export class LetterBank {
	@Input() word: string;
	@Input() dataSource: DataSource;
	@Input() hiddenLetters: string[];
	@Input() gameOver: boolean;

	@ViewChildren(Letter)
	lettersList: QueryList<Letter>;

	guessedLetters:string[];
	displayedLetters:string[];

	totalLetters: number = 8;
	numberHiddenLetters: number = 3;
	numberGuessableLetters: number;

	@Output('user-guessed')
	guessEmitter = new EventEmitter();

	constructor() {
		this.displayedLetters = [];
		this.numberGuessableLetters = this.totalLetters - this.numberHiddenLetters;
	}

	ngOnChanges(data) {
		if (data.word && this.word) {
			this.hiddenLetters = [];
			this.guessedLetters = [];
		}

		if (data.hiddenLetters && data.hiddenLetters.currentValue) {
			this.hiddenLetters = data.hiddenLetters.currentValue;
			this.guessedLetters = [];
			this.displayedLetters = this.hiddenLetters.slice();

			this.addAdditionalCharsToGuess(this.numberGuessableLetters);

			this.lettersList.forEach((item) => item.setClass(''));
		}
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
			if (this.hiddenLetters.indexOf(char) !== -1 || !char) {
				continue;
			}
			this.displayedLetters.push(char);
			count--;
		}
		this.displayedLetters = this.shuffleArray(this.displayedLetters);
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

	guessWithLetter(letter:Letter) {
		if (this.gameOver) {
			return;
		}

		var correct = this.guessWithChar(letter.letter);
		letter.setClass(correct ? 'correct' : 'incorrect');
	}

	@LogDecorator
	guessWithChar(char:string) {
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
			return true;
		}
		else {
			// incorrect
			this.guessEmitter.emit({
				correct: false,
				guessedLetterCount: this.guessedLetters.length,
				guessedLetters: this.guessedLetters,
				hiddenLettersCount: this.hiddenLetters.length,
			});
			return false;
		}
	}
}