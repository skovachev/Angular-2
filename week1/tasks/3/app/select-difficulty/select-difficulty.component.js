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
var SelectDifficulty = (function () {
    function SelectDifficulty() {
        this.difficultySelector = new core_1.EventEmitter();
    }
    SelectDifficulty.prototype.selectDifficulty = function (diff) {
        this.difficultySelector.emit(diff);
    };
    __decorate([
        core_1.Output('difficulty-selected'), 
        __metadata('design:type', Object)
    ], SelectDifficulty.prototype, "difficultySelector", void 0);
    SelectDifficulty = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-difficulty',
            templateUrl: 'select-difficulty.component.html',
            styleUrls: ['select-difficulty.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SelectDifficulty);
    return SelectDifficulty;
}());
exports.SelectDifficulty = SelectDifficulty;
//# sourceMappingURL=select-difficulty.component.js.map