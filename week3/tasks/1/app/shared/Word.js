"use strict";
var Word = (function () {
    function Word(text) {
        this.text = text;
    }
    Word.prototype.toJson = function () {
        return {
            text: this.text,
        };
    };
    Word.unserialise = function (wordData) {
        var word = new Word(wordData.text);
        return word;
    };
    return Word;
}());
exports.Word = Word;
//# sourceMappingURL=Word.js.map