import { Directive, ViewContainerRef, Input, TemplateRef, ElementRef, ContentChild } from "@angular/core";

@Directive({
	selector: '[myFor]'
})
export class myFor 
{
	private array:number[] = [];

	@ContentChild(TemplateRef)
	child:TemplateRef<any>

	constructor(private _vcr: ViewContainerRef, private _el:ElementRef) {

	}

	@Input()
	set myFor(array:number[]) {
		this.array = array;
		this.runLoop();
	}

	runLoop() {
		this._vcr.clear();
		if (!this.child) return;

		this.array.forEach((item) => {
			this._vcr.createEmbeddedView(this.child, {
				item
			});
		});
	}
}