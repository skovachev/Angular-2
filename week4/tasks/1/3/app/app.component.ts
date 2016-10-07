import { Component, ViewChild } from '@angular/core'
import * as Rx from 'rxjs/Rx'

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class App {
	clock$:Rx.Observable<string>

	constructor() {
		this.clock$ = Rx.Observable.interval(1000).map((index) => {
			var m = new Date();
			return this.formatNumber(m.getHours()) + ":" + this.formatNumber(m.getMinutes()) + ":" + this.formatNumber(m.getSeconds());
		});
	}

	formatNumber(n) {
		return String("00" + n).slice(-2);
	}
}