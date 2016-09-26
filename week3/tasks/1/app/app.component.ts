import { Component, ViewChild } from '@angular/core'
import { User } from './shared/index'
import { RegisterComponent } from './components/register';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class App {
	route:string
	users:User[]
	currentUser:User

	constructor() {
		this.users = this.loadUsers();
		this.currentUser = this.getLoggedInUser();
		this.route = this.currentUser ? 'users' : 'register';
	}

	onUserRegistered(user) {
		this.storeUser(user);
		this.currentUser = user;
		console.log('New user registered: ', user);

		this.loginUser(user);

		// go to users list
		this.route = 'users';
	}

	onUserChanged(event) {
		var changedUser = event.user,
			changedData = event.data;

		this.users.forEach(function(user, index, users) {
			if (user.email == changedUser.email) {
				for(let key in changedData) {
					let value = changedData[key];
					user[key] = value;
				}
				users[index] = user;
			}
		});

		this.storeUsers();
	}

	loginUser(user) {
		localStorage.setItem('currentUser', JSON.stringify(user.toJson()));
	}

	getLoggedInUser() {
		var user = localStorage.getItem('currentUser');
		if (user) {
			return User.unserialise(JSON.parse(user));
		}
		return null;
	}

	storeUser(user:User) {
		this.users.push(user);
		this.storeUsers();
	}

	loadUsers() {
		var users = localStorage.getItem('users');
		if (users) {
			users = JSON.parse(users);
		}
		if (!users) {
			users = [];
		}
		return users.map((serializedUser) => User.unserialise(serializedUser));
	}

	storeUsers() {
		var users = this.users.map((user) => user.toJson());
		localStorage.setItem('users', JSON.stringify(users));
	}
}