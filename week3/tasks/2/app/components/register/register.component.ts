import { Component, EventEmitter, Output } from '@angular/core'
import { User, Validator } from './../../shared/index'

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})
export class RegisterComponent {

	validator: Validator;
	constructor() {
		this.validator = new Validator();
	}

	@Output()
	userRegistered = new EventEmitter<User>();

	registerUser(data) {
		var user = new User(data.email, data.password);
		this.userRegistered.emit(user);
		return false;
	}

	validForm(form) {
		return this.validator.validEmail(form.email) 
			&& this.validator.validPassword(form.password) 
			&& this.validator.validPasswordConfirmation(form.password_confirmation, form.password);
	}
}