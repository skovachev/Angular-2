import { Component, ViewChild } from '@angular/core'
import { User, Word, WordsService, UsersService } from './shared/index'
import { RegisterComponent } from './components/register';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [WordsService, UsersService]
})
export class App {
	route:string
	users:User[]
	words:Word[]
	currentUser:User

	constructor(private wordsService: WordsService, private usersService: UsersService) {
		this.wordsService = new WordsService();
		this.usersService = new UsersService();

		this.users = this.usersService.loadUsers();
		this.words = this.wordsService.loadWords();
		this.currentUser = this.usersService.getLoggedInUser();
		this.route = this.currentUser ? 'users' : 'register';
	}

	onUserRegistered(user) {
		this.storeUser(user);
		this.currentUser = user;
		console.log('New user registered: ', user);

		this.usersService.loginUser(user);

		// go to users list
		this.route = 'users';
	}

	onUserChanged(event) {
		var changedUser = event.user,
			changedData = event.data;

		this.users = this.usersService.updateUser(changedUser, changedData, this.users);
	}

	onWordChanged(event) {
		var changedWord = event.word,
			changedData = event.data;
		this.words = this.wordsService.updateWord(changedWord, changedData, this.words);
	}

	onWordRemoved(word) {
		this.words = this.wordsService.removeWord(word, this.words);
	}

	storeUser(user:User) {
		this.users.push(user);
		this.usersService.storeUsers(this.users);
	}

	logout() {
		this.usersService.logoutUser();
		this.currentUser = null;
	}
}