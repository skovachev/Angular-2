export class User {
	constructor(public email:string, private password:string){
		
	}

	toJson() {
		return {
			email: this.email,
			password: this.password
		};
	}

	static unserialise(userData) {
	    var user = new User(userData.email, userData.password);
	    return user;
	}
}