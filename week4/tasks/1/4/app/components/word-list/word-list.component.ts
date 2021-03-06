import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Word, Validator, User } from './../../shared/index'

@Component({
	moduleId: module.id,
	selector: 'word-list',
	templateUrl: 'word-list.component.html',
	styleUrls: ['word-list.component.css'],
	providers: [Validator]
})
export class WordListComponent {
	@Input()
	words:Word[]

	editedWord:Word

	@Input()
	currentUser: User;

	@Output()
	wordChanged = new EventEmitter<Object>();

	@Output()
	wordRemoved = new EventEmitter<Object>();

	constructor(private validator:Validator) {
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
		this.editedWord = new Word('', this.currentUser.email);
		console.log(this.editedWord);
	}

	removeWord(word) {
		this.wordRemoved.emit(word);
	}
}