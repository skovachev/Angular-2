import { Injectable } from '@angular/core'

@Injectable()
export class Validator {
	constructor(){
		
	}

	validEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);	
	}

	validPassword(password:string) {
		return password && password.length > 8;
	}

	validPasswordConfirmation(passwordConfirmation:string, password:string) {
		return passwordConfirmation == password;
	}

	validWord(word) {
		return word && word.length > 0 && word.indexOf(' ') === -1;
	}
}