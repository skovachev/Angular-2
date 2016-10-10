import { Component} from '@angular/core'
import { Word, Validator, User, UsersService, WordsService } from './../shared/index'

@Component({
	moduleId: module.id,
	selector: 'word-list',
	templateUrl: 'word-list.component.html',
	styleUrls: ['word-list.component.css'],
	providers: [Validator]
})
export class WordListComponent {
	words:Word[]
	editedWord:Word
	currentUser: User;

	constructor(private validator:Validator, private wordsService:WordsService, private userService: UsersService) {
		this.wordsService.loadWords().subscribe(this.refreshModels);
		this.userService.getLoggedInUser().subscribe((user) => {
			this.currentUser = user;
		});
	}	

	editWord(word) {
		this.editedWord = word;
	}

	saveWord(data) {
		this.editedWord = null;
		this.wordsService.updateWord(this.editedWord, data, this.words).subscribe(this.refreshModels);
	}

	validForm(form) {
		return true;
	}

	refreshModels(words) {
		this.words = words;
	}

	addNewWord(){
		this.editedWord = new Word('', this.currentUser.email);
	}

	removeWord(word) {
		this.wordsService.removeWord(word, this.words).subscribe(this.refreshModels);
	}
}