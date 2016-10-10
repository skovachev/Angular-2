"use strict";
var Word = (function () {
    function Word(text, addedBy) {
        this.text = text;
        this.addedBy = addedBy;
    }
    Word.prototype.toJson = function () {
        return {
            text: this.text,
            addedBy: this.addedBy,
        };
    };
    Word.unserialise = function (wordData) {
        var word = new Word(wordData.text, wordData.addedBy);
        return word;
    };
    return Word;
}());
exports.Word = Word;
//# sourceMappingURL=Word.js.map