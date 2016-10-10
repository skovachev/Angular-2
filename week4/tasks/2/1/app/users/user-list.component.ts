import { Component, Input } from '@angular/core'
import { User, Validator, UsersService } from './../shared/index'

@Component({
	moduleId: module.id,
	selector: 'user-list',
	templateUrl: 'user-list.component.html',
	styleUrls: ['user-list.component.css'],
	providers: [Validator]
})
export class UserListComponent {
	@Input()
	users:User[]
	editedUser:User
	displayedUsers:User[]
	filter:string

	constructor(private validator: Validator, private usersService: UsersService) {
		this.usersService.loadUsers().subscribe((users) => {
			this.refreshModels(users);
		});
	}	

	editUser(user) {
		this.editedUser = user;
	}

	saveUser(data) {
		this.editedUser = null;
		this.usersService.updateUser(this.editedUser, data, this.users).subscribe((users) => {
			this.refreshModels(users);
		});
	}

	refreshModels(users) {
		this.users = users;
		this.filterUsers(this.filter);
	}

	validForm(form) {
		return this.validator.validPassword(form.password) 
			&& this.validator.validPasswordConfirmation(form.password_confirmation, form.password);
	}

	filterUsers(filter) {
		if (!filter) {
			this.displayedUsers = this.users;
			return;
		}
		var re = new RegExp('.*' + filter + '.*', 'i');
		this.displayedUsers = this.users.filter((user) => re.test(user.email));
		console.log(this.displayedUsers);
	}
}