import { Component, Input, Output, EventEmitter } from '@angular/core'
import { User, Validator } from './../../shared/index'

@Component({
	moduleId: module.id,
	selector: 'user-list',
	templateUrl: 'user-list.component.html',
	styleUrls: ['user-list.component.css']
})
export class UserListComponent {
	@Input()
	users:User[]
	editedUser:User
	validator: Validator

	@Output()
	userChanged = new EventEmitter<Object>();

	constructor() {
		this.validator = new Validator();
	}	

	editUser(user) {
		this.editedUser = user;
	}

	saveUser(data) {
		alert('Saving user: ' + this.editedUser.email);
		this.userChanged.emit({
			user: this.editedUser,
			data: data
		});
		this.editedUser = null;
	}
}