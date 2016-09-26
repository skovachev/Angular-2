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
var UserListComponent = (function () {
    function UserListComponent() {
        this.userChanged = new core_1.EventEmitter();
        this.validator = new index_1.Validator();
    }
    UserListComponent.prototype.editUser = function (user) {
        this.editedUser = user;
    };
    UserListComponent.prototype.saveUser = function (data) {
        alert('Saving user: ' + this.editedUser.email);
        this.userChanged.emit({
            user: this.editedUser,
            data: data
        });
        this.editedUser = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserListComponent.prototype, "userChanged", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-list',
            templateUrl: 'user-list.component.html',
            styleUrls: ['user-list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map