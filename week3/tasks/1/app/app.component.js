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
var index_1 = require('./shared/index');
var App = (function () {
    function App() {
        this.wordsService = new index_1.WordsService();
        this.usersService = new index_1.UsersService();
        this.users = this.usersService.loadUsers();
        this.words = this.wordsService.loadWords();
        this.currentUser = this.usersService.getLoggedInUser();
        this.route = this.currentUser ? 'users' : 'register';
    }
    App.prototype.onUserRegistered = function (user) {
        this.storeUser(user);
        this.currentUser = user;
        console.log('New user registered: ', user);
        this.usersService.loginUser(user);
        // go to users list
        this.route = 'users';
    };
    App.prototype.onUserChanged = function (event) {
        var changedUser = event.user, changedData = event.data;
        this.users = this.usersService.updateUser(changedUser, changedData, this.users);
    };
    App.prototype.onWordChanged = function (event) {
        var changedWord = event.word, changedData = event.data;
        this.words = this.wordsService.updateWord(changedWord, changedData, this.words);
    };
    App.prototype.storeUser = function (user) {
        this.users.push(user);
        this.usersService.storeUsers(this.users);
    };
    App = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map