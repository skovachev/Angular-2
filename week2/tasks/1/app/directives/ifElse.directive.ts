import { Directive, ViewContainerRef, Input, TemplateRef, ElementRef, ContentChild } from "@angular/core";

@Directive({
	selector: '[ifElse]'
})
export class ifElse 
{
	private cond:boolean;

	@ContentChild('true')
	trueEl:TemplateRef<ElementRef>

	@ContentChild('false')
	falseEl:TemplateRef<ElementRef>

	constructor(private _vcr: ViewContainerRef, private _el:ElementRef) {

	}

	ngAfterContentInit() {
		this.reeval();
	}

	@Input()
	set ifElse(cond:boolean) {
		this.cond = cond;
		this.reeval();
	}

	reeval() {
		this._vcr.clear();
		if (this.cond) {
			this._vcr.createEmbeddedView(this.trueEl);
		}
		else {
			this._vcr.createEmbeddedView(this.falseEl);
		}
	}
}