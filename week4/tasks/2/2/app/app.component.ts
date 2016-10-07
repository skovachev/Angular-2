import { Component, ViewChild, ElementRef } from '@angular/core'
import * as Rx from 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class App {

	words:Array<string>
	filter:string
	
	constructor() {
		this.words = ["gladiator", "playground", "architecture", "paleosoic", "extraterrestrial"];
		this.filter = '';
	}
}