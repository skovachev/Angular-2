import { Component, Output, EventEmitter, Input } from '@angular/core'

@Component({
	moduleId: module.id,
	selector: 'letter',
	templateUrl: 'letter.component.html',
	styleUrls: ['letter.component.css']
})
export class Letter {
	className: string;

	@Input()
	letter: string;

	@Output() 
	letterClicked = new EventEmitter<Letter>();
	
	constructor() {
	}

	setClass(className:string) {
		this.className = className;
	}

	onButtonClicked() {
		this.letterClicked.emit(this);
	}
}