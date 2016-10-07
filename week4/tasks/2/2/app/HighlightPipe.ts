import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
	transform(value: any, filter:string, cssClass:string): any {
		value = value || '';
		var replaceWith = `<span class='${cssClass}'>$1</span>`;
		var regex = new RegExp(`(${filter})`, 'g');
		var newValue = value.replace(regex, replaceWith);
		return newValue;
	}
}