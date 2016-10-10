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
var router_1 = require('@angular/router');
var Rx_1 = require('rxjs/Rx');
var AuthService = (function () {
    function AuthService(_router, userService) {
        this._router = _router;
        this.userService = userService;
    }
    Object.defineProperty(AuthService.prototype, "isLogged", {
        get: function () {
            return !!this.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.canActivate = function (route, state) {
        var isLogged = !!this.currentUser;
        if (!isLogged)
            this._router.navigate(['/login', { redirectUrl: state.url }]);
        return isLogged;
    };
    AuthService.prototype.loginUser = function (user) {
        var _this = this;
        // check if user exists
        return new Rx_1.Observable(function (subscriber) {
            _this.userService.userExists(user).subscribe(function (u) {
                if (u) {
                    localStorage.setItem('currentUser', JSON.stringify(user.toJson()));
                    _this.currentUser = user;
                    subscriber.next(user);
                    subscriber.complete();
                }
            });
        });
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        return Rx_1.Observable.of(true);
    };
    AuthService.prototype.getLoggedInUser = function () {
        return new Rx_1.Observable(function (subscriber) {
            var user = localStorage.getItem('currentUser');
            if (user) {
                subscriber.next(index_1.User.unserialise(JSON.parse(user)));
            }
            subscriber.next(null);
            subscriber.complete();
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, index_1.UsersService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map