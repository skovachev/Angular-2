import { Component } from '@angular/core'

@Component({
	moduleId: module.id,
	selector: 'application',
	templateUrl: 'app.component.html'
})
export class App {
	private cond: boolean;

	constructor() {
		this.cond = true;
	}

	toggle(){
		this.cond = !this.cond;
	}
}