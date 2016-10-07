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
var Rx = require('rxjs/Rx');
var http_1 = require('@angular/http');
var RegisterComponent = (function () {
    function RegisterComponent(validator, _http) {
        this.validator = validator;
        this._http = _http;
        this.userRegistered = new core_1.EventEmitter();
        this.bday = '04.04.1986';
        this.githubSearchUrl = 'https://api.github.com/search/users?q=';
        this.githubProfileUrl = 'https://api.github.com/users/';
    }
    RegisterComponent.prototype.registerUser = function (data) {
        var user = new index_1.User(data.email, data.password, data.birthday);
        this.userRegistered.emit(user);
        return false;
    };
    RegisterComponent.prototype.validForm = function (form) {
        return this.validator.validEmail(form.email)
            && this.validator.validPassword(form.password)
            && this.validator.validPasswordConfirmation(form.password_confirmation, form.password);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.githubResults$ = Rx.Observable.fromEvent(this.githubNameInput.nativeElement, 'keyup').debounceTime(1000).flatMap(function (event) {
            return _this._http.get(_this.githubSearchUrl + _this.githubNameInput.nativeElement.value);
        }).map(function (response) { return response.json(); });
        this.githubResults$.subscribe(function (results) {
            _this.githubUsernames = results.items.map(function (item) { return item.login; });
        });
    };
    RegisterComponent.prototype.githubLogin = function (username) {
        var _this = this;
        this._http.get(this.githubProfileUrl + username)
            .map(function (res) { return res.json(); })
            .map(function (user) { return user.email; })
            .subscribe(function (email) {
            _this.userEmail = email;
        });
    };
    __decorate([
        core_1.ViewChild('githubName'), 
        __metadata('design:type', core_1.ElementRef)
    ], RegisterComponent.prototype, "githubNameInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterComponent.prototype, "userRegistered", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css'],
            providers: [index_1.Validator]
        }), 
        __metadata('design:paramtypes', [index_1.Validator, http_1.Http])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map