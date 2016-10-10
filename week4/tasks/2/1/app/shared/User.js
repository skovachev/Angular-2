"use strict";
var User = (function () {
    function User(email, password, birthdate) {
        if (birthdate === void 0) { birthdate = null; }
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
    }
    User.prototype.toJson = function () {
        return {
            email: this.email,
            password: this.password,
            birthdate: this.birthdate
        };
    };
    User.unserialise = function (userData) {
        var user = new User(userData.email, userData.password, userData.birthdate);
        return user;
    };
    User.prototype.isSameAs = function (user) {
        return this.email == user.email && this.password == user.password;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map