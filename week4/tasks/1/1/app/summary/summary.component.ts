import { Component } from '@angular/core'
import { LogDecorator } from '../shared/index'

@Component({
	moduleId: module.id,
	selector: 'summary',
	templateUrl: 'summary.component.html',
	styleUrls: ['summary.component.css']
})
export class Summary {

	wordsCorrect: string[];
	wordsFailed: string[];

	constructor() {
		this.wordsCorrect = [];
		this.wordsFailed = [];
	}

	@LogDecorator
	addWord(word:string, correct:boolean) {
		if (correct) {
			this.wordsCorrect.push(word);
		}
		else {
			this.wordsFailed.push(word);
		}
	}

	addFailedWord(word:string) {
		return this.addWord(word, false);
	}

	addCorrectWord(word:string) {
		return this.addWord(word, true);
	}
}