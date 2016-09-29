import { Injectable } from '@angular/core'
import { User } from './index'

@Injectable()
export class UsersService {

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

	updateUser(changedUser, changedData, users) {
		users.forEach(function(user, index, users) {
			if (user.email == changedUser.email) {
				for(let key in changedData) {
					let value = changedData[key];
					user[key] = value;
				}
				users[index] = user;
			}
		});

		this.storeUsers(users);
		return users;
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

	storeUsers(users) {
		var users = users.map((user) => user.toJson());
		localStorage.setItem('users', JSON.stringify(users));
	}
}