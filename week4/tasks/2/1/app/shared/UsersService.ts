import { Injectable } from '@angular/core'
import { User } from './index'
import { Observable, Subscriber } from 'rxjs/Rx'

@Injectable()
export class UsersService {

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

		return this.storeUsers(users);
	}

	loadUsers():Observable<User[]> {
		return new Observable<User[]>((subscriber:Subscriber<User[]>) => {
			var users = localStorage.getItem('users');
			if (users) {
				users = JSON.parse(users);
			}
			if (!users) {
				users = [];
			}
			users = users.map((serializedUser) => User.unserialise(serializedUser));
			subscriber.next(users);
			subscriber.complete();
		});
	}

	storeUsers(users) {
		var users = users.map((user) => user.toJson());
		return new Observable<User[]>((subscriber:Subscriber<User[]>) => {
			localStorage.setItem('users', JSON.stringify(users));
			subscriber.next(users);
			subscriber.complete();
		});
	}

	userExists(user):Observable<boolean> {
		return new Observable<boolean>((subscriber:Subscriber<boolean>) => {
			var found = false;
			this.loadUsers().subscribe((users:User[]) => {
				users.forEach((u) => {
					let same = u.isSameAs(user);
					subscriber.next(same);
				});
				subscriber.complete();
			});
		});
	}
}