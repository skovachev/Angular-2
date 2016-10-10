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
var Rx_1 = require('rxjs/Rx');
var UsersService = (function () {
    function UsersService() {
    }
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
        return this.storeUsers(users);
    };
    UsersService.prototype.loadUsers = function () {
        return new Rx_1.Observable(function (subscriber) {
            var users = localStorage.getItem('users');
            if (users) {
                users = JSON.parse(users);
            }
            if (!users) {
                users = [];
            }
            users = users.map(function (serializedUser) { return index_1.User.unserialise(serializedUser); });
            subscriber.next(users);
            subscriber.complete();
        });
    };
    UsersService.prototype.storeUsers = function (users) {
        var users = users.map(function (user) { return user.toJson(); });
        return new Rx_1.Observable(function (subscriber) {
            localStorage.setItem('users', JSON.stringify(users));
            subscriber.next(users);
            subscriber.complete();
        });
    };
    UsersService.prototype.userExists = function (user) {
        var _this = this;
        return new Rx_1.Observable(function (subscriber) {
            var found = false;
            _this.loadUsers().subscribe(function (users) {
                users.forEach(function (u) {
                    var same = u.isSameAs(user);
                    subscriber.next(same);
                });
                subscriber.complete();
            });
        });
    };
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=UsersService.js.map