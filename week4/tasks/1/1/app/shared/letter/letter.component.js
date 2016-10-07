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
var Letter = (function () {
    function Letter() {
        this.letterClicked = new core_1.EventEmitter();
    }
    Letter.prototype.setClass = function (className) {
        this.className = className;
    };
    Letter.prototype.onButtonClicked = function () {
        this.letterClicked.emit(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Letter.prototype, "letter", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Letter.prototype, "letterClicked", void 0);
    Letter = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'letter',
            templateUrl: 'letter.component.html',
            styleUrls: ['letter.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Letter);
    return Letter;
}());
exports.Letter = Letter;
//# sourceMappingURL=letter.component.js.map