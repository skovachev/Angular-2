import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Word, Validator } from './../../shared/index'

@Component({
	moduleId: module.id,
	selector: 'word-list',
	templateUrl: 'word-list.component.html',
	styleUrls: ['word-list.component.css']
})
export class WordListComponent {
	@Input()
	words:Word[]
	editedWord:Word
	validator: Validator

	@Output()
	wordChanged = new EventEmitter<Object>();

	constructor() {
		this.validator = new Validator();
	}	

	editWord(user) {
		this.editedWord = user;
	}

	saveWord(data) {
		this.wordChanged.emit({
			word: this.editedWord,
			data: data
		});
		this.editedWord = null;
	}

	validForm(form) {
		return true;
	}

	addNewWord(){
		this.editedWord = new Word('');
	}
}