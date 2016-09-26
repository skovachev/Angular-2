"use strict";
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
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map