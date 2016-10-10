import { Injectable } from '@angular/core';
import { User, UsersService } from './index';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable, Subscriber } from 'rxjs/Rx'

@Injectable()
export class AuthService implements CanActivate {
	currentUser: User;

	constructor(private _router:Router, private userService:UsersService) {}

	get isLogged() {
		return !!this.currentUser;
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let isLogged = !!this.currentUser;
		if (!isLogged) this._router.navigate(['/login', {redirectUrl: state.url}]);
		return isLogged;
	}

	loginUser(user):Observable<User> {
		// check if user exists
		return new Observable<User>((subscriber: Subscriber<User>) => {
			this.userService.userExists(user).subscribe((u:boolean) => {
				if (u) {
					localStorage.setItem('currentUser', JSON.stringify(user.toJson()));
					this.currentUser = user;
					subscriber.next(user);
					subscriber.complete();
				}
			});
		});
	}

	logoutUser() {
		localStorage.removeItem('currentUser');
		this.currentUser = null;
		return Observable.of(true);
	}

	getLoggedInUser() {
		return new Observable<User>((subscriber: Subscriber<User>) => {
			var user = localStorage.getItem('currentUser');
			if (user) {
				subscriber.next(User.unserialise(JSON.parse(user)));
			}
			subscriber.next(null);
			subscriber.complete();
		});
	}
}