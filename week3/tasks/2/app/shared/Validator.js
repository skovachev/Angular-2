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
var Validator = (function () {
    function Validator() {
    }
    Validator.prototype.validEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    Validator.prototype.validPassword = function (password) {
        return password && password.length > 8;
    };
    Validator.prototype.validPasswordConfirmation = function (passwordConfirmation, password) {
        return passwordConfirmation == password;
    };
    Validator.prototype.validWord = function (word) {
        return word && word.length > 0 && word.indexOf(' ') === -1;
    };
    Validator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Validator);
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map