import { Component, ViewChild, ElementRef } from '@angular/core'
import * as Rx from 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class App {
	@ViewChild('theInput') 
	theInput:ElementRef

	words:Array<string>
	filteredWords:Array<string>
	filter:string

	constructor() {
		this.words = ["gladiator", "playground", "architecture", "paleosoic", "extraterrestrial"];
		this.filteredWords = this.words;
	}

	ngOnInit() {
		Rx.Observable.fromEvent(this.theInput.nativeElement, 'keyup').subscribe((event:Event) => {
			this.filterUsing(this.theInput.nativeElement.value);
		});
	}

	filterUsing(value) {
		var regex = new RegExp(value);
		this.filteredWords = this.words.filter((word) => regex.test(word));
	}
}