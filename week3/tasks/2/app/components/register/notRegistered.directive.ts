import { Directive, forwardRef, Input } from '@angular/core'
import { FormControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';
import { UsersService } from '../../shared/index'

@Directive({
	selector: '[notRegistered][ngModel]',
	providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => NotRegistered), multi: true }]
})
export class NotRegistered {

	field: string;

	constructor(private users: UsersService) {
	}

	@Input() 
	set notRegistered(field:string) {
		console.log(field);
        this.field = field;
    }

	validate(c: FormControl) {
        let registeredFields = this.users.loadUsers().map((user) => user[this.field]);
        console.log(registeredFields, c.value, registeredFields.indexOf(c.value) === -1);
        let valid = registeredFields.indexOf(c.value) === -1;
        return valid ? null : { notRegistered: { valid: false } };
    }
}