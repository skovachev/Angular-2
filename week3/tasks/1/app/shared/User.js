"use strict";
var User = (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    User.prototype.toJson = function () {
        return {
            email: this.email,
            password: this.password
        };
    };
    User.unserialise = function (userData) {
        var user = new User(userData.email, userData.password);
        return user;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map