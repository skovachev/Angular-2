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
var index_1 = require('../shared/index');
var Summary = (function () {
    function Summary() {
        this.wordsCorrect = [];
        this.wordsFailed = [];
    }
    Summary.prototype.addWord = function (word, correct) {
        if (correct) {
            this.wordsCorrect.push(word);
        }
        else {
            this.wordsFailed.push(word);
        }
    };
    Summary.prototype.addFailedWord = function (word) {
        return this.addWord(word, false);
    };
    Summary.prototype.addCorrectWord = function (word) {
        return this.addWord(word, true);
    };
    __decorate([
        index_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, Boolean]), 
        __metadata('design:returntype', void 0)
    ], Summary.prototype, "addWord", null);
    Summary = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'summary',
            templateUrl: 'summary.component.html',
            styleUrls: ['summary.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Summary);
    return Summary;
}());
exports.Summary = Summary;
//# sourceMappingURL=summary.component.js.map