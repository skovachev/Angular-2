import { Directive, ViewContainerRef, Input, TemplateRef, Host } from "@angular/core";
import { ifElseStar } from "./ifElseStar.directive";
import { View } from "./View";

@Directive({
	selector: '[ifTrueCase]'
})
export class ifTrueCase 
{
	@Host() 
	_host: ifElseStar
	_view: View;

	constructor(
		private _vcr: ViewContainerRef, 
		private _el:TemplateRef<Object>, 
		@Host() host: ifElseStar) {

		this._host = host;
		this._view = new View(this._vcr, this._el);
		this._host.registerView(this._view, true);
	}
}