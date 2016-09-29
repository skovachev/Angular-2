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
var index_1 = require('./index');
var WordsService = (function () {
    function WordsService() {
    }
    WordsService.prototype.loadWords = function () {
        var words = localStorage.getItem('words');
        if (words) {
            words = JSON.parse(words);
        }
        if (!words) {
            words = [];
        }
        return words.map(function (serialised) { return index_1.Word.unserialise(serialised); });
    };
    WordsService.prototype.storeWords = function (words) {
        var words = words.map(function (word) { return word.toJson(); });
        localStorage.setItem('words', JSON.stringify(words));
    };
    WordsService.prototype.updateWord = function (changedWord, changedData, words) {
        var wordFound = false;
        words.forEach(function (word, index, words) {
            if (word.text == changedWord.text) {
                for (var key in changedData) {
                    var value = changedData[key];
                    word[key] = value;
                }
                words[index] = word;
                wordFound = true;
            }
        });
        if (!wordFound) {
            var word = new index_1.Word(changedWord.text, changedWord.addedBy);
            for (var key in changedData) {
                var value = changedData[key];
                word[key] = value;
            }
            words.push(word);
        }
        this.storeWords(words);
        return words;
    };
    WordsService.prototype.removeWord = function (word, words) {
        for (var index in words) {
            var currentWord = words[index];
            if (currentWord.text == word.text && currentWord.addedBy == word.addedBy) {
                words.splice(index, 1);
            }
        }
        this.storeWords(words);
        return words;
    };
    WordsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WordsService);
    return WordsService;
}());
exports.WordsService = WordsService;
//# sourceMappingURL=WordsService.js.map