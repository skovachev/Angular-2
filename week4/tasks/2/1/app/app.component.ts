import { Component, ViewChild } from '@angular/core';
import { AuthService } from './shared/index';
import { Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class App {
	loggedIn: boolean;

	constructor(private _auth:AuthService, private _router: Router) {
		this.loggedIn = this._auth.isLogged;
	}

	logout() {
		this._auth.logoutUser().subscribe(() => this.loggedIn = false);
		this._router.navigateByUrl('/login');
	}
	
}