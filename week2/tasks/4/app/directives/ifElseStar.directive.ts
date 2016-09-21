import { Directive, Input } from "@angular/core";
import { ifTrueCase } from './ifTrueCase.directive';
import { ifFalseCase } from './ifFalseCase.directive';
import { View } from './View';

@Directive({
	selector: '[ifElseStar]'
})
export class ifElseStar 
{
	private condition:boolean;
	private views = new Map<boolean, View[]>();
	private activeViews = new Array<View>();

	constructor() {

	}

	ngAfterContentInit() {
		this.renderViews();
	}

	@Input()
	set ifElseStar(cond:boolean) {
		this.condition = cond;
		this.renderViews();
	}

	renderViews() {
		this.clearViews();
		this.activeViews = this.views.get(this.condition);
		this.activeViews.forEach((view) => view.create());
	}

	clearViews() {
		this.activeViews.forEach((view) => view.destroy());
	}

	registerView(view: View, conditionValue: boolean) {
		var views:View[] = this.views.get(conditionValue);
		if (!views) {
			views = new Array<View>();
		}
		views.push(view);
		this.views.set(conditionValue, views);
		console.log(this.views);
	}
}