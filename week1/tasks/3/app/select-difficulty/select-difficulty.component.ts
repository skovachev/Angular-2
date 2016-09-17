import { Component, Output, EventEmitter } from '@angular/core'

@Component({
	moduleId: module.id,
	selector: 'select-difficulty',
	templateUrl: 'select-difficulty.component.html',
	styleUrls: ['select-difficulty.component.css']
})
export class SelectDifficulty {

	@Output('difficulty-selected')
	difficultySelector = new EventEmitter();

	constructor() {
	}

	selectDifficulty(diff) {
		this.difficultySelector.emit(diff);
	}
}