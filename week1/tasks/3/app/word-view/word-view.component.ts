import { Component, Input } from '@angular/core'

@Component({
	moduleId: module.id,
	selector: 'word-view',
	templateUrl: 'word-view.component.html',
	styleUrls: ['word-view.component.css']
})
export class WordView {

	@Input() word: string;
	@Input() numberHiddenLetters: number;
	
	displayedWord: string;
	hiddenLetters: string[];

	constructor() {
		this.word = 'Test';
	}

	onWordChange() {
		this.displayedWord = this.word;
		this.hiddenLetters = this.partiallyHideWord(this.numberHiddenLetters);
	}

	partiallyHideWord(maxNumberOfHiddenLetters?:number):string[] {
		var hiddenLetters = [];

		var word = this.word;
		maxNumberOfHiddenLetters = maxNumberOfHiddenLetters || Math.floor(word.length / 2);
		var randomNumberOfHiddenLetters = maxNumberOfHiddenLetters;

		while (randomNumberOfHiddenLetters > 0) {
			var randomIndex = Math.floor(Math.random() * this.displayedWord.length);
			let letter = this.displayedWord[randomIndex];
			if (letter !== '_') {
				hiddenLetters.push(letter);
				this.displayedWord = this.stringReplaceCharAt(this.displayedWord, randomIndex, '_');
			}
			else {
				// try another random index
				continue;
			}
			randomNumberOfHiddenLetters--;
		}

		return hiddenLetters;
	}

	stringReplaceCharAt(text:string, index:number, character:string) {
	    return text.substr(0, index) + character + text.substr(index+character.length);
	}

	regenerateDisplayedWord(guessedLetters) {
		for (let i = 0; i < this.word.length; ++i) {
			let char = this.word[i];
			let charGuessed = guessedLetters.indexOf(char) !== -1;
			if (charGuessed) {
				this.displayedWord = this.stringReplaceCharAt(this.displayedWord, i, char);
			}
		}

		if (this.displayedWord.indexOf('_') === -1) {
			return true;
		}
		return false;
	}

	checkWordGuessed():boolean {
		return this.displayedWord.indexOf('_') === -1;
	}

	getWord():string {
		return this.word;
	}
}