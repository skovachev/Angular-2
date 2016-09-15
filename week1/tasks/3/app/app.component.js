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
var letter_bank_component_1 = require('./letter-bank/letter-bank.component');
var App = (function () {
    function App() {
        this.dataSource = new DataSource_1.DataSource();
        this.guessesDifficultyModifier = 5;
        this.difficultySelected = false;
        console.log(this.wordView);
        console.log(this.letterBank);
    }
    App.prototype.ngAfterViewInit = function () {
        console.log(this.wordView);
    };
    App.prototype.selectDifficulty = function (diff) {
        var modifier = 5, timer = 60;
        switch (diff) {
            case "Beginner":
                modifier = 5;
                timer = 60;
                break;
            case "Intermediate":
                modifier = 4;
                timer = 40;
                break;
            case "Advanced":
                modifier = 2;
                timer = 20;
                break;
        }
        this.guessesDifficultyModifier = modifier;
        this.difficultySelected = true;
        this.timerLimitSec = timer;
        this.startNewGame();
    };
    App.prototype.startNewGame = function () {
        this.wordsCorrect = [];
        this.wordsFailed = [];
        this.nextWord();
    };
    App.prototype.nextWord = function () {
        clearInterval(this.countdownTimer);
        this.gameOver = false;
        this.showSummary = false;
        this.currentTime = 0;
        this.correctGuesses = 0;
        this.incorrectGuesses = 0;
        var totalLetters = 8;
        var numberHiddenLetters = 3;
        var numberGuessableLetters = totalLetters - numberHiddenLetters;
        this.allowedGuesses = numberHiddenLetters + this.guessesDifficultyModifier;
        this.word = this.dataSource.getRandomWord();
        console.log(this.word);
        if (!this.word) {
            this.presentSummary();
        }
        else {
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
            this.wordsCorrect.push(currentWord);
        }
        else {
            this.wordsFailed.push(currentWord);
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
    __decorate([
        core_1.ViewChild(word_view_component_1.WordView), 
        __metadata('design:type', word_view_component_1.WordView)
    ], App.prototype, "wordView", void 0);
    __decorate([
        core_1.ViewChild(letter_bank_component_1.LetterBank), 
        __metadata('design:type', letter_bank_component_1.LetterBank)
    ], App.prototype, "letterBank", void 0);
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
    App = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wordgame',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map