"use strict";
var index_1 = require('./index');
var UsersService = (function () {
    function UsersService() {
    }
    UsersService.prototype.loginUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user.toJson()));
    };
    UsersService.prototype.getLoggedInUser = function () {
        var user = localStorage.getItem('currentUser');
        if (user) {
            return index_1.User.unserialise(JSON.parse(user));
        }
        return null;
    };
    UsersService.prototype.updateUser = function (changedUser, changedData, users) {
        users.forEach(function (user, index, users) {
            if (user.email == changedUser.email) {
                for (var key in changedData) {
                    var value = changedData[key];
                    user[key] = value;
                }
                users[index] = user;
            }
        });
        this.storeUsers(users);
        return users;
    };
    UsersService.prototype.loadUsers = function () {
        var users = localStorage.getItem('users');
        if (users) {
            users = JSON.parse(users);
        }
        if (!users) {
            users = [];
        }
        return users.map(function (serializedUser) { return index_1.User.unserialise(serializedUser); });
    };
    UsersService.prototype.storeUsers = function (users) {
        var users = users.map(function (user) { return user.toJson(); });
        localStorage.setItem('users', JSON.stringify(users));
    };
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=UsersService.js.map