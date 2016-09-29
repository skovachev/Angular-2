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
var index_1 = require('./../../shared/index');
var RegisterComponent = (function () {
    function RegisterComponent() {
        this.userRegistered = new core_1.EventEmitter();
        this.validator = new index_1.Validator();
    }
    RegisterComponent.prototype.registerUser = function (data) {
        var user = new index_1.User(data.email, data.password);
        this.userRegistered.emit(user);
        return false;
    };
    RegisterComponent.prototype.validForm = function (form) {
        return this.validator.validEmail(form.email)
            && this.validator.validPassword(form.password)
            && this.validator.validPasswordConfirmation(form.password_confirmation, form.password);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterComponent.prototype, "userRegistered", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map