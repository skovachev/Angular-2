import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'


export const DATEPICKER_COMPONENT: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerComponent),
  multi: true
};

@Component({
	moduleId: module.id,
	selector: 'datepicker[ngModel]',
	template: `
		<select name="day" [(ngModel)]='day'>
			<option value="{{ item }}" *ngFor='let item of dayOptions'>{{item}}</option>
		</select>

		<select name="month" [(ngModel)]='month'>
			<option value="{{ item.number }}" *ngFor='let item of monthOptions'>{{item.name}}</option>
		</select>

		<select name="year" [(ngModel)]='year'>
			<option value="{{ item }}" *ngFor='let item of yearOptions'>{{item}}</option>
		</select>
	`,
	providers: [DATEPICKER_COMPONENT]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {
	constructor() {
	}

	monthOptions:any
	dayOptions:any
	dayMappings:any
	yearOptions:any

	dayInternal:number
	monthInternal:number
	yearInternal:number


	set day(day:number) {
		this.dayInternal = day;
		this.change();
	}

	get day() {
		return this.dayInternal;
	}

	set month(month:number) {
		this.monthInternal = month;
		this.regenerateDayOptions();
		this.change();
	}

	get month() {
		return this.monthInternal;
	}

	set year(year:number) {
		this.yearInternal = year;
		this.change();
	}

	get year() {
		return this.yearInternal;
	}

	onChange = (_: any) => {};

  	writeValue(obj: string): void {
  		if (!obj) return;
  		var parts = obj.split('.');
  		this.dayInternal = parseInt(parts[0], 10);
  		this.monthInternal = parseInt(parts[1], 10);
  		this.yearInternal = parseInt(parts[2], 10);
  		this.regenerateDayOptions();
  	}

  	registerOnChange(fn: any): void {
  		this.onChange = fn;
  	}

  	registerOnTouched = () => {};

	ngOnInit() {
		this.monthOptions = [
			{ number: 1, name: 'January' },
			{ number: 2, name: 'February' },
			{ number: 3, name: 'March' },
			{ number: 4, name: 'April' },
			{ number: 5, name: 'May' },
			{ number: 6, name: 'June' },
			{ number: 7, name: 'July' },
			{ number: 8, name: 'August' },
			{ number: 9, name: 'September' },
			{ number: 10, name: 'October' },
			{ number: 11, name: 'November' },
			{ number: 12, name: 'December' },
		];

		this.dayMappings = {
			1: 31,
			2: 28,
			3: 31,
			4: 30,
			5: 31,
			6: 30,
			7: 31,
			8: 31,
			9: 30,
			10: 31,
			11: 30,
			12: 31,
		};

		this.regenerateDayOptions();

		this.yearOptions = [];
		for (var i = 1980; i < 2005; ++i) {
			this.yearOptions.push(i);
		}
	}

	regenerateDayOptions() {
		var options = [],
			month = this.monthInternal,
			max = this.dayMappings[month];
		for (var i = 1; i <= max; ++i) {
			options.push(i);
		}
		this.dayOptions = options;
	}

	change() {
		let value = [this.dayInternal, this.monthInternal, this.yearInternal].join('.');
		this.onChange(value);
	}
}
