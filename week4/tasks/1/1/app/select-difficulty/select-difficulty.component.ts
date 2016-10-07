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
		var modifier = 5,
			timer = 60;
		switch (diff) {
			case "Beginner":
				modifier = 5;
				timer = 60;
				break;
			case "Intermediate":
				modifier = 4;
				timer = 40;
				break;
			case "Advanced":
				modifier = 2;
				timer = 20;
				break;
		}
		var difficultyData = {
			modifier,
			timer
		};
		this.difficultySelector.emit(difficultyData);
	}
}