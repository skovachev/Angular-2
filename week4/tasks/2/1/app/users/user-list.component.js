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
var index_1 = require('./../shared/index');
var UserListComponent = (function () {
    function UserListComponent(validator, usersService) {
        var _this = this;
        this.validator = validator;
        this.usersService = usersService;
        this.usersService.loadUsers().subscribe(function (users) {
            _this.refreshModels(users);
        });
    }
    UserListComponent.prototype.editUser = function (user) {
        this.editedUser = user;
    };
    UserListComponent.prototype.saveUser = function (data) {
        var _this = this;
        this.editedUser = null;
        this.usersService.updateUser(this.editedUser, data, this.users).subscribe(function (users) {
            _this.refreshModels(users);
        });
    };
    UserListComponent.prototype.refreshModels = function (users) {
        this.users = users;
        this.filterUsers(this.filter);
    };
    UserListComponent.prototype.validForm = function (form) {
        return this.validator.validPassword(form.password)
            && this.validator.validPasswordConfirmation(form.password_confirmation, form.password);
    };
    UserListComponent.prototype.filterUsers = function (filter) {
        if (!filter) {
            this.displayedUsers = this.users;
            return;
        }
        var re = new RegExp('.*' + filter + '.*', 'i');
        this.displayedUsers = this.users.filter(function (user) { return re.test(user.email); });
        console.log(this.displayedUsers);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserListComponent.prototype, "users", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-list',
            templateUrl: 'user-list.component.html',
            styleUrls: ['user-list.component.css'],
            providers: [index_1.Validator]
        }), 
        __metadata('design:paramtypes', [index_1.Validator, index_1.UsersService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map