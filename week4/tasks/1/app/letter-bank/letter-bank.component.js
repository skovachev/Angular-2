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
var DataSource_1 = require('../shared/DataSource');
var LogDecorator_1 = require('../shared/LogDecorator');
var letter_component_1 = require('../shared/letter/letter.component');
var LetterBank = (function () {
    function LetterBank() {
        this.totalLetters = 8;
        this.numberHiddenLetters = 3;
        this.guessEmitter = new core_1.EventEmitter();
        this.displayedLetters = [];
        this.numberGuessableLetters = this.totalLetters - this.numberHiddenLetters;
    }
    LetterBank.prototype.ngOnChanges = function (data) {
        if (data.word && this.word) {
            this.hiddenLetters = [];
            this.guessedLetters = [];
        }
        if (data.hiddenLetters && data.hiddenLetters.currentValue) {
            this.hiddenLetters = data.hiddenLetters.currentValue;
            this.guessedLetters = [];
            this.displayedLetters = this.hiddenLetters.slice();
            this.addAdditionalCharsToGuess(this.numberGuessableLetters);
            this.lettersList.forEach(function (item) { return item.setClass(''); });
        }
    };
    LetterBank.prototype.letterGuessedCorrect = function (letter) {
        var letterIsInWord = this.letterInWord(letter);
        var letterIsGuessed = this.guessedLetters.indexOf(letter) !== -1;
        return letterIsInWord && letterIsGuessed;
    };
    LetterBank.prototype.letterGuessedIncorrect = function (letter) {
        var letterIsInWord = this.letterInWord(letter);
        var letterIsGuessed = this.guessedLetters.indexOf(letter) !== -1;
        return !letterIsInWord && letterIsGuessed;
    };
    LetterBank.prototype.letterInWord = function (letter) {
        return this.word.indexOf(letter) !== -1;
    };
    LetterBank.prototype.addAdditionalCharsToGuess = function (count) {
        while (count > 0) {
            var char = this.dataSource.getRandomAlphabetChar();
            if (this.hiddenLetters.indexOf(char) !== -1 || !char) {
                continue;
            }
            this.displayedLetters.push(char);
            count--;
        }
        this.displayedLetters = this.shuffleArray(this.displayedLetters);
    };
    LetterBank.prototype.shuffleArray = function (a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        return a;
    };
    LetterBank.prototype.guessWithLetter = function (letter) {
        if (this.gameOver) {
            return;
        }
        var correct = this.guessWithChar(letter.letter);
        letter.setClass(correct ? 'correct' : 'incorrect');
    };
    LetterBank.prototype.guessWithChar = function (char) {
        this.guessedLetters.push(char);
        var foundIndex = this.hiddenLetters.indexOf(char);
        if (foundIndex !== -1) {
            this.guessEmitter.emit({
                correct: true,
                guessedLetterCount: this.guessedLetters.length,
                guessedLetters: this.guessedLetters,
                hiddenLettersCount: this.hiddenLetters.length,
            });
            this.hiddenLetters.splice(foundIndex, 1);
            return true;
        }
        else {
            // incorrect
            this.guessEmitter.emit({
                correct: false,
                guessedLetterCount: this.guessedLetters.length,
                guessedLetters: this.guessedLetters,
                hiddenLettersCount: this.hiddenLetters.length,
            });
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LetterBank.prototype, "word", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', DataSource_1.DataSource)
    ], LetterBank.prototype, "dataSource", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LetterBank.prototype, "hiddenLetters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LetterBank.prototype, "gameOver", void 0);
    __decorate([
        core_1.ViewChildren(letter_component_1.Letter), 
        __metadata('design:type', core_1.QueryList)
    ], LetterBank.prototype, "lettersList", void 0);
    __decorate([
        core_1.Output('user-guessed'), 
        __metadata('design:type', Object)
    ], LetterBank.prototype, "guessEmitter", void 0);
    __decorate([
        LogDecorator_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], LetterBank.prototype, "guessWithChar", null);
    LetterBank = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'letter-bank',
            templateUrl: 'letter-bank.component.html',
            styleUrls: ['letter-bank.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LetterBank);
    return LetterBank;
}());
exports.LetterBank = LetterBank;
//# sourceMappingURL=letter-bank.component.js.map