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
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=UsersService.js.map