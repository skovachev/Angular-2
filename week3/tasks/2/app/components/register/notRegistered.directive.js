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
var NotRegistered = (function () {
    function NotRegistered(users) {
        this.users = users;
    }
    Object.defineProperty(NotRegistered.prototype, "notRegistered", {
        set: function (field) {
            console.log(field);
            this.field = field;
        },
        enumerable: true,
        configurable: true
    });
    NotRegistered.prototype.validate = function (c) {
        var _this = this;
        var registeredFields = this.users.loadUsers().map(function (user) { return user[_this.field]; });
        console.log(registeredFields, c.value, registeredFields.indexOf(c.value) === -1);
        var valid = registeredFields.indexOf(c.value) === -1;
        return valid ? null : { notRegistered: { valid: false } };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NotRegistered.prototype, "notRegistered", null);
    NotRegistered = __decorate([
        core_1.Directive({
            selector: '[notRegistered][ngModel]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return NotRegistered; }), multi: true }]
        }), 
        __metadata('design:paramtypes', [index_1.UsersService])
    ], NotRegistered);
    return NotRegistered;
}());
exports.NotRegistered = NotRegistered;
//# sourceMappingURL=notRegistered.directive.js.map