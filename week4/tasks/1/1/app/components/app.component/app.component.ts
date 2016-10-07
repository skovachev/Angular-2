import { Component } from '@angular/core'

@Component({
	moduleId: module.id,
	selector: 'application',
	templateUrl: 'app.component.html'
})
export class App {
	private greeting: string;

	constructor() {
		this.greeting = 'Hello!';
	}
}