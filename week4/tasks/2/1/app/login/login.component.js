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
var router_1 = require('@angular/router');
var index_1 = require('../shared/index');
// import 'rxjs/add/observal'
var LoginComponent = (function () {
    function LoginComponent(_route, _router, _authService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this.wrongCredentials = false;
        _route.params.subscribe(function (object) {
            _this.redirectUrl = object['redirectUrl'];
        });
    }
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        var user = new index_1.User(data.email, data.password);
        this._authService.loginUser(user)
            .subscribe(function (user) {
            _this.wrongCredentials = false;
            _this._router.navigateByUrl(_this.redirectUrl || '/');
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, index_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map