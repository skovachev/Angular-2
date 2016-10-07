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
var forms_1 = require('@angular/forms');
var index_1 = require('../../shared/index');
var Rx = require('rxjs/Rx');
var NotRegisteredAsync = (function () {
    function NotRegisteredAsync(users) {
        this.users = users;
    }
    Object.defineProperty(NotRegisteredAsync.prototype, "notRegisteredAsync", {
        set: function (field) {
            this.field = field;
        },
        enumerable: true,
        configurable: true
    });
    NotRegisteredAsync.prototype.validate = function (c) {
        var _this = this;
        var users = this.users.loadUsers();
        var observable = Rx.Observable.from(users).filter(function (user) { return c.value === user[_this.field]; });
        return observable;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NotRegisteredAsync.prototype, "notRegisteredAsync", null);
    NotRegisteredAsync = __decorate([
        core_1.Directive({
            selector: '[notRegisteredAsync][ngModel]',
            providers: [{ provide: forms_1.NG_ASYNC_VALIDATORS, useExisting: core_1.forwardRef(function () { return NotRegisteredAsync; }), multi: true }]
        }), 
        __metadata('design:paramtypes', [index_1.UsersService])
    ], NotRegisteredAsync);
    return NotRegisteredAsync;
}());
exports.NotRegisteredAsync = NotRegisteredAsync;
//# sourceMappingURL=notRegisteredAsync.directive.js.map