export class User {
	constructor(public email:string, private password:string, private birthdate:string = null){
		
	}

	toJson() {
		return {
			email: this.email,
			password: this.password
			birthdate: this.birthdate
		};
	}

	static unserialise(userData) {
	    var user = new User(userData.email, userData.password, userData.birthdate);
	    return user;
	}
}