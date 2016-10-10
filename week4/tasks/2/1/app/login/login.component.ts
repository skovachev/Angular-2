import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, User } from '../shared/index';
// import 'rxjs/add/observal'

@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html'
})
export class LoginComponent {
	wrongCredentials: boolean = false;
	redirectUrl: string;

	constructor(private _route:ActivatedRoute, private _router: Router, private _authService:AuthService) {
		_route.params.subscribe((object) => {
			this.redirectUrl = object['redirectUrl'];
		});
	}

	login(data) {
		var user = new User(data.email, data.password);
		this._authService.loginUser(user)
			.subscribe((user) => {
				this.wrongCredentials = false;
				this._router.navigateByUrl(this.redirectUrl || '/');
			});
	}
}