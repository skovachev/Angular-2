"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
exports.DATEPICKER_COMPONENT = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DatepickerComponent; }),
    multi: true
};
var DatepickerComponent = (function () {
    function DatepickerComponent() {
        this.onChange = function (_) { };
        this.registerOnTouched = function () { };
    }
    Object.defineProperty(DatepickerComponent.prototype, "day", {
        get: function () {
            return this.dayInternal;
        },
        set: function (day) {
            this.dayInternal = day;
            this.change();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatepickerComponent.prototype, "month", {
        get: function () {
            return this.monthInternal;
        },
        set: function (month) {
            this.monthInternal = month;
            this.regenerateDayOptions();
            this.change();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatepickerComponent.prototype, "year", {
        get: function () {
            return this.yearInternal;
        },
        set: function (year) {
            this.yearInternal = year;
            this.change();
        },
        enumerable: true,
        configurable: true
    });
    DatepickerComponent.prototype.writeValue = function (obj) {
        if (!obj)
            return;
        var parts = obj.split('.');
        this.dayInternal = parseInt(parts[0], 10);
        this.monthInternal = parseInt(parts[1], 10);
        this.yearInternal = parseInt(parts[2], 10);
        this.regenerateDayOptions();
    };
    DatepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatepickerComponent.prototype.ngOnInit = function () {
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
    };
    DatepickerComponent.prototype.regenerateDayOptions = function () {
        var options = [], month = this.monthInternal, max = this.dayMappings[month];
        for (var i = 1; i <= max; ++i) {
            options.push(i);
        }
        this.dayOptions = options;
    };
    DatepickerComponent.prototype.change = function () {
        var value = [this.dayInternal, this.monthInternal, this.yearInternal].join('.');
        this.onChange(value);
    };
    DatepickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datepicker[ngModel]',
            template: "\n\t\t<select name=\"day\" [(ngModel)]='day'>\n\t\t\t<option value=\"{{ item }}\" *ngFor='let item of dayOptions'>{{item}}</option>\n\t\t</select>\n\n\t\t<select name=\"month\" [(ngModel)]='month'>\n\t\t\t<option value=\"{{ item.number }}\" *ngFor='let item of monthOptions'>{{item.name}}</option>\n\t\t</select>\n\n\t\t<select name=\"year\" [(ngModel)]='year'>\n\t\t\t<option value=\"{{ item }}\" *ngFor='let item of yearOptions'>{{item}}</option>\n\t\t</select>\n\t",
            providers: [exports.DATEPICKER_COMPONENT]
        }), 
        __metadata('design:paramtypes', [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map