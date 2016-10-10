import { Directive, forwardRef, Input } from '@angular/core'
import { FormControl, ValidatorFn, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { UsersService, User } from '../shared/index'
import * as Rx from 'rxjs/Rx'

@Directive({
	selector: '[notRegisteredAsync][ngModel]',
	providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => NotRegisteredAsync), multi: true }]
})
export class NotRegisteredAsync {

	field: string;

	constructor(private users: UsersService) {
	}

	@Input() 
	set notRegisteredAsync(field:string) {
        this.field = field;
    }

	validate(c: FormControl) {
		var users = this.users.loadUsers();
		var observable = Rx.Observable.from(users).filter((user:User) => c.value === user[this.field]);
		return observable;
    }
}