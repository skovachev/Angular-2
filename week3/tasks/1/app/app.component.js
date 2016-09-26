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
        this.users = this.loadUsers();
        this.words = this.loadWords();
        this.currentUser = this.getLoggedInUser();
        this.route = this.currentUser ? 'users' : 'register';
    }
    App.prototype.onUserRegistered = function (user) {
        this.storeUser(user);
        this.currentUser = user;
        console.log('New user registered: ', user);
        this.loginUser(user);
        // go to users list
        this.route = 'users';
    };
    App.prototype.onUserChanged = function (event) {
        var changedUser = event.user, changedData = event.data;
        this.users.forEach(function (user, index, users) {
            if (user.email == changedUser.email) {
                for (var key in changedData) {
                    var value = changedData[key];
                    user[key] = value;
                }
                users[index] = user;
            }
        });
        this.storeUsers();
    };
    App.prototype.onWordChanged = function (event) {
        var changedWord = event.word, changedData = event.data, wordFound = false;
        this.words.forEach(function (word, index, words) {
            if (word.text == changedWord.text) {
                for (var key in changedData) {
                    var value = changedData[key];
                    word[key] = value;
                }
                words[index] = word;
                wordFound = true;
            }
        });
        if (!wordFound) {
            var word = new index_1.Word(changedWord.text, changedWord.addedBy);
            for (var key in changedData) {
                var value = changedData[key];
                word[key] = value;
            }
            this.words.push(word);
            console.log(this.words);
        }
        this.storeWords();
    };
    App.prototype.loginUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user.toJson()));
    };
    App.prototype.getLoggedInUser = function () {
        var user = localStorage.getItem('currentUser');
        if (user) {
            return index_1.User.unserialise(JSON.parse(user));
        }
        return null;
    };
    App.prototype.storeUser = function (user) {
        this.users.push(user);
        this.storeUsers();
    };
    App.prototype.loadUsers = function () {
        var users = localStorage.getItem('users');
        if (users) {
            users = JSON.parse(users);
        }
        if (!users) {
            users = [];
        }
        return users.map(function (serializedUser) { return index_1.User.unserialise(serializedUser); });
    };
    App.prototype.storeUsers = function () {
        var users = this.users.map(function (user) { return user.toJson(); });
        localStorage.setItem('users', JSON.stringify(users));
    };
    App.prototype.loadWords = function () {
        var words = localStorage.getItem('words');
        if (words) {
            words = JSON.parse(words);
        }
        if (!words) {
            words = [];
        }
        return words.map(function (serialised) { return index_1.Word.unserialise(serialised); });
    };
    App.prototype.storeWords = function () {
        var words = this.words.map(function (word) { return word.toJson(); });
        localStorage.setItem('words', JSON.stringify(words));
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