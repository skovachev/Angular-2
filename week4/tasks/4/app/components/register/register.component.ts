import { Component, EventEmitter, Output } from '@angular/core'
import { User, Validator } from './../../shared/index'

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css'],
	providers: [Validator]
})
export class RegisterComponent {

	bday:string

	constructor(private validator: Validator) {
		this.bday = '04.04.1986';
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
}