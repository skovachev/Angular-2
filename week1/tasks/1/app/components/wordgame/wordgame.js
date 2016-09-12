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
var DataSource_1 = require('./DataSource');
var WordGame = (function () {
    function WordGame() {
        this.dataSource = new DataSource_1.DataSource();
        this.guessesDifficultyModifier = 5;
        this.difficultySelected = false;
    }
    WordGame.prototype.selectDifficulty = function (diff) {
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
    WordGame.prototype.startNewGame = function () {
        this.wordsCorrect = [];
        this.wordsFailed = [];
        this.nextWord();
    };
    WordGame.prototype.nextWord = function () {
        clearInterval(this.countdownTimer);
        this.hiddenLetters = [];
        this.guessedLetters = [];
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
        if (!this.word) {
            this.presentSummary();
        }
        else {
            this.displayedWord = this.word;
            this.partiallyHideWord(numberHiddenLetters);
            this.addAdditionalCharsToGuess(numberGuessableLetters);
            this.displayedLetters = this.hiddenLetters.slice();
        }
        this.countdownTimer = setInterval(function () {
            this.currentTime++;
            if (this.currentTime >= this.timerLimitSec) {
                this.gameCompleted(false);
                clearInterval(this.countdownTimer);
            }
        }.bind(this), 1000);
    };
    WordGame.prototype.presentSummary = function () {
        this.showSummary = true;
    };
    WordGame.prototype.partiallyHideWord = function (maxNumberOfHiddenLetters) {
        var word = this.word;
        maxNumberOfHiddenLetters = maxNumberOfHiddenLetters || Math.floor(word.length / 2);
        var randomNumberOfHiddenLetters = maxNumberOfHiddenLetters;
        while (randomNumberOfHiddenLetters > 0) {
            var randomIndex = Math.floor(Math.random() * this.displayedWord.length);
            var letter = this.displayedWord[randomIndex];
            if (letter !== '_') {
                this.hiddenLetters.push(letter);
                this.displayedWord = this.stringReplaceCharAt(this.displayedWord, randomIndex, '_');
            }
            else {
                // try another random index
                continue;
            }
            randomNumberOfHiddenLetters--;
        }
    };
    WordGame.prototype.shuffleArray = function (a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        return a;
    };
    WordGame.prototype.addAdditionalCharsToGuess = function (count) {
        while (count > 0) {
            var char = this.dataSource.getRandomAlphabetChar();
            if (this.hiddenLetters.indexOf(char) !== -1) {
                continue;
            }
            this.hiddenLetters.push(char);
            count--;
        }
        this.hiddenLetters = this.shuffleArray(this.hiddenLetters);
    };
    WordGame.prototype.regenerateDisplayedWord = function () {
        for (var i = 0; i < this.word.length; ++i) {
            var char = this.word[i];
            var charGuessed = this.guessedLetters.indexOf(char) !== -1;
            if (charGuessed) {
                this.displayedWord = this.stringReplaceCharAt(this.displayedWord, i, char);
            }
        }
        if (this.displayedWord.indexOf('_') === -1) {
            this.gameCompleted(true);
        }
    };
    WordGame.prototype.gameCompleted = function (won) {
        this.gameOver = true;
        if (won) {
            this.wordsCorrect.push(this.word);
        }
        else {
            this.wordsFailed.push(this.word);
        }
        this.dataSource.markWordAsUsed(this.word);
    };
    WordGame.prototype.stringReplaceCharAt = function (text, index, character) {
        return text.substr(0, index) + character + text.substr(index + character.length);
    };
    WordGame.prototype.guessWithChar = function (char) {
        if (this.gameOver) {
            return;
        }
        this.guessedLetters.push(char);
        var foundIndex = this.hiddenLetters.indexOf(char);
        if (foundIndex !== -1) {
            this.correctGuesses++;
            this.hiddenLetters.splice(foundIndex, 1);
            this.regenerateDisplayedWord();
        }
        else {
            // incorrect
            this.incorrectGuesses++;
        }
        if (this.incorrectGuesses > this.hiddenLetters.length) {
            this.gameCompleted(false);
        }
        var wordGuessed = this.displayedWord.indexOf('_') === -1;
        if (this.guessedLetters.length >= this.allowedGuesses && !wordGuessed) {
            this.gameCompleted(false);
        }
    };
    WordGame.prototype.letterGuessedCorrect = function (letter) {
        var letterIsInWord = this.word.indexOf(letter) !== -1;
        var letterIsGuessed = this.guessedLetters.indexOf(letter) !== -1;
        return letterIsInWord && letterIsGuessed;
    };
    WordGame.prototype.letterGuessedIncorrect = function (letter) {
        var letterIsInWord = this.word.indexOf(letter) !== -1;
        var letterIsGuessed = this.guessedLetters.indexOf(letter) !== -1;
        return !letterIsInWord && letterIsGuessed;
    };
    WordGame = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wordgame',
            templateUrl: 'wordgame.html',
            styleUrls: ['wordgame.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WordGame);
    return WordGame;
}());
exports.WordGame = WordGame;
//# sourceMappingURL=wordgame.js.map