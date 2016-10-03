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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var DataSource = (function () {
    function DataSource(_http) {
        var _this = this;
        _http.get('/words.json').map(function (response) { return response.json(); }).subscribe(function (words) { return _this.words = words; });
        // this.words = ['gladiator', 'playground', 'architecture', 'paleosoic'];
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
    DataSource = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataSource);
    return DataSource;
}());
exports.DataSource = DataSource;
//# sourceMappingURL=DataSource.js.map