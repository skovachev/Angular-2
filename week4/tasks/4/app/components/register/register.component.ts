import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core'
import { User, Validator } from './../../shared/index'
import * as Rx from 'rxjs/Rx'
import { Http } from '@angular/http'

interface GithubResults {
	items: Array<Object>
}

interface GithubResult {
	login: string
	email: string
}

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css'],
	providers: [Validator]
})
export class RegisterComponent {

	@ViewChild('githubName')
	githubNameInput:ElementRef

	githubResults$:Rx.Observable<Object>

	githubUsernames:Array<string>

	githubSearchUrl:string
	githubProfileUrl:string

	bday:string
	userEmail:string

	constructor(private validator: Validator, private _http:Http) {
		this.bday = '04.04.1986';
		this.githubSearchUrl = 'https://api.github.com/search/users?q=';
		this.githubProfileUrl = 'https://api.github.com/users/'
	}

	@Output()
	userRegistered = new EventEmitter<User>();

	registerUser(data) {
		var user = new User(data.email, data.password, data.birthday);
		this.userRegistered.emit(user);
		return false;
	}

	validForm(form) {
		return this.validator.validEmail(form.email) 
			&& this.validator.validPassword(form.password) 
			&& this.validator.validPasswordConfirmation(form.password_confirmation, form.password);
	}

	ngOnInit() {
		this.githubResults$ = Rx.Observable.fromEvent(this.githubNameInput.nativeElement, 'keyup').debounceTime(1000).flatMap((event:Event) => {
			return this._http.get(this.githubSearchUrl + this.githubNameInput.nativeElement.value);
		}).map((response) => response.json());

		this.githubResults$.subscribe((results:GithubResults) => {
			this.githubUsernames = results.items.map((item:GithubResult) => item.login)
		});
	}

	githubLogin(username) {
		this._http.get(this.githubProfileUrl + username)
			.map((res) => res.json())
			.map((user:GithubResult) => user.email)
			.subscribe((email) => {
				this.userEmail = email
			});
	}
}