"use strict";
var DataSource = (function () {
    function DataSource() {
        this.words = ['gladiator', 'playground', 'architecture', 'paleosoic'];
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    }
    DataSource.prototype.getRandomWord = function () {
        if (!this.words.length) {
            return null;
        }
        var totalWords = this.words.length;
        var randomIndex = Math.floor((Math.random() * totalWords));
        return this.words[randomIndex];
    };
    DataSource.prototype.getRandomAlphabetChar = function () {
        var index = Math.floor(Math.random() * this.alphabet.length) + 1;
        return this.alphabet[index];
    };
    DataSource.prototype.markWordAsUsed = function (word) {
        var index = this.words.indexOf(word);
        if (index !== -1) {
            this.words.splice(index, 1);
        }
    };
    return DataSource;
}());
exports.DataSource = DataSource;
//# sourceMappingURL=DataSource.js.map