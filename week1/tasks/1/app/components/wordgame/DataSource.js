"use strict";
var DataSource = (function () {
    function DataSource() {
        this.words = ['test', 'journey', 'arena', 'playground'];
    }
    DataSource.prototype.getRandomWord = function () {
        var totalWords = this.words.length;
        var randomIndex = Math.floor((Math.random() * totalWords));
        return this.words[randomIndex];
    };
    return DataSource;
}());
exports.DataSource = DataSource;
//# sourceMappingURL=DataSource.js.map