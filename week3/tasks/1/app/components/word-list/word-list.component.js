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
var index_1 = require('./../../shared/index');
var WordListComponent = (function () {
    function WordListComponent() {
        this.wordChanged = new core_1.EventEmitter();
        this.validator = new index_1.Validator();
    }
    WordListComponent.prototype.editWord = function (user) {
        this.editedWord = user;
    };
    WordListComponent.prototype.saveWord = function (data) {
        this.wordChanged.emit({
            word: this.editedWord,
            data: data
        });
        this.editedWord = null;
    };
    WordListComponent.prototype.validForm = function (form) {
        return true;
    };
    WordListComponent.prototype.addNewWord = function () {
        this.editedWord = new index_1.Word('', this.currentUser.email);
        console.log(this.editedWord);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], WordListComponent.prototype, "words", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.User)
    ], WordListComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WordListComponent.prototype, "wordChanged", void 0);
    WordListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'word-list',
            templateUrl: 'word-list.component.html',
            styleUrls: ['word-list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WordListComponent);
    return WordListComponent;
}());
exports.WordListComponent = WordListComponent;
//# sourceMappingURL=word-list.component.js.map