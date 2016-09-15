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
var WordView = (function () {
    function WordView() {
        this.newWordGenerated = new core_1.EventEmitter();
    }
    WordView.prototype.ngOnChanges = function (data) {
        if (data.word && this.word) {
            this.displayedWord = this.word;
            this.hiddenLetters = this.partiallyHideWord(this.numberHiddenLetters);
            this.newWordGenerated.emit();
        }
    };
    WordView.prototype.partiallyHideWord = function (maxNumberOfHiddenLetters) {
        var hiddenLetters = [];
        var word = this.word;
        maxNumberOfHiddenLetters = maxNumberOfHiddenLetters || Math.floor(word.length / 2);
        var randomNumberOfHiddenLetters = maxNumberOfHiddenLetters;
        while (randomNumberOfHiddenLetters > 0) {
            var randomIndex = Math.floor(Math.random() * this.displayedWord.length);
            var letter = this.displayedWord[randomIndex];
            if (letter !== '_') {
                hiddenLetters.push(letter);
                this.displayedWord = this.stringReplaceCharAt(this.displayedWord, randomIndex, '_');
            }
            else {
                // try another random index
                continue;
            }
            randomNumberOfHiddenLetters--;
        }
        return hiddenLetters;
    };
    WordView.prototype.stringReplaceCharAt = function (text, index, character) {
        return text.substr(0, index) + character + text.substr(index + character.length);
    };
    WordView.prototype.regenerateDisplayedWord = function (guessedLetters) {
        for (var i = 0; i < this.word.length; ++i) {
            var char = this.word[i];
            var charGuessed = guessedLetters.indexOf(char) !== -1;
            if (charGuessed) {
                this.displayedWord = this.stringReplaceCharAt(this.displayedWord, i, char);
            }
        }
        if (this.displayedWord.indexOf('_') === -1) {
            return true;
        }
        return false;
    };
    WordView.prototype.checkWordGuessed = function () {
        return this.displayedWord.indexOf('_') === -1;
    };
    WordView.prototype.getWord = function () {
        return this.word;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WordView.prototype, "word", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], WordView.prototype, "hiddenLetters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], WordView.prototype, "numberHiddenLetters", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WordView.prototype, "newWordGenerated", void 0);
    WordView = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'word-view',
            templateUrl: 'word-view.component.html',
            styleUrls: ['word-view.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WordView);
    return WordView;
}());
exports.WordView = WordView;
//# sourceMappingURL=word-view.component.js.map