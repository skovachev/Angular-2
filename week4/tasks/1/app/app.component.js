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
var DataSource_1 = require('./shared/DataSource');
var LogDecorator_1 = require('./shared/LogDecorator');
var word_view_component_1 = require('./word-view/word-view.component');
var summary_component_1 = require('./summary/summary.component');
var letter_bank_component_1 = require('./letter-bank/letter-bank.component');
var App = (function () {
    function App(dataSource) {
        this.dataSource = dataSource;
        this.numberHiddenLetters = 3;
        this.guessesDifficultyModifier = 5;
        this.difficultySelected = false;
    }
    App.prototype.selectDifficulty = function (diff) {
        this.guessesDifficultyModifier = diff.modifier;
        this.difficultySelected = true;
        this.timerLimitSec = diff.timer;
        this.startNewGame();
    };
    App.prototype.startNewGame = function () {
        this.nextWord();
    };
    App.prototype.nextWord = function () {
        clearInterval(this.countdownTimer);
        this.gameOver = false;
        this.showSummary = false;
        this.currentTime = 0;
        this.correctGuesses = 0;
        this.incorrectGuesses = 0;
        this.allowedGuesses = this.numberHiddenLetters + this.guessesDifficultyModifier;
        this.word = this.dataSource.getRandomWord();
        if (!this.word) {
            this.presentSummary();
        }
        this.countdownTimer = setInterval(function () {
            this.currentTime++;
            if (this.currentTime >= this.timerLimitSec) {
                this.gameCompleted(false);
                clearInterval(this.countdownTimer);
            }
        }.bind(this), 1000);
    };
    App.prototype.presentSummary = function () {
        this.showSummary = true;
    };
    App.prototype.gameCompleted = function (won) {
        this.gameOver = true;
        var currentWord = this.wordView.getWord();
        if (won) {
            this.summary.addCorrectWord(currentWord);
        }
        else {
            this.summary.addFailedWord(currentWord);
        }
        this.dataSource.markWordAsUsed(currentWord);
    };
    App.prototype.onUserGuess = function (event) {
        var correct = event.correct;
        if (event.correct) {
            this.correctGuesses++;
            var wordGuessed = this.wordView.regenerateDisplayedWord(event.guessedLetters);
            if (wordGuessed) {
                this.gameCompleted(true);
            }
        }
        else {
            // incorrect
            this.incorrectGuesses++;
        }
        if (this.incorrectGuesses > event.hiddenLettersCount) {
            this.gameCompleted(false);
        }
        var wordGuessed = this.wordView.checkWordGuessed();
        if (event.guessedLetterCount >= this.allowedGuesses && !wordGuessed) {
            this.gameCompleted(false);
        }
    };
    App.prototype.onNewWordGenerated = function () {
        this.letterBank.hiddenLetters = this.wordView.hiddenLetters;
    };
    __decorate([
        core_1.ViewChild(word_view_component_1.WordView), 
        __metadata('design:type', word_view_component_1.WordView)
    ], App.prototype, "wordView", void 0);
    __decorate([
        core_1.ViewChild(letter_bank_component_1.LetterBank), 
        __metadata('design:type', letter_bank_component_1.LetterBank)
    ], App.prototype, "letterBank", void 0);
    __decorate([
        core_1.ViewChild(summary_component_1.Summary), 
        __metadata('design:type', summary_component_1.Summary)
    ], App.prototype, "summary", void 0);
    __decorate([
        LogDecorator_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], App.prototype, "selectDifficulty", null);
    __decorate([
        LogDecorator_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], App.prototype, "startNewGame", null);
    __decorate([
        LogDecorator_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], App.prototype, "nextWord", null);
    __decorate([
        LogDecorator_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], App.prototype, "presentSummary", null);
    __decorate([
        LogDecorator_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], App.prototype, "gameCompleted", null);
    __decorate([
        LogDecorator_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], App.prototype, "onUserGuess", null);
    __decorate([
        LogDecorator_1.LogDecorator, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], App.prototype, "onNewWordGenerated", null);
    App = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wordgame',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            providers: [DataSource_1.DataSource]
        }), 
        __metadata('design:paramtypes', [DataSource_1.DataSource])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map