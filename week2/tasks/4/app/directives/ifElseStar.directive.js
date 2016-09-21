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
var core_1 = require("@angular/core");
var ifElseStar = (function () {
    function ifElseStar() {
        this.views = new Map();
        this.activeViews = new Array();
    }
    ifElseStar.prototype.ngAfterContentInit = function () {
        this.renderViews();
    };
    Object.defineProperty(ifElseStar.prototype, "ifElseStar", {
        set: function (cond) {
            this.condition = cond;
            this.renderViews();
        },
        enumerable: true,
        configurable: true
    });
    ifElseStar.prototype.renderViews = function () {
        this.clearViews();
        this.activeViews = this.views.get(this.condition);
        this.activeViews.forEach(function (view) { return view.create(); });
    };
    ifElseStar.prototype.clearViews = function () {
        this.activeViews.forEach(function (view) { return view.destroy(); });
    };
    ifElseStar.prototype.registerView = function (view, conditionValue) {
        var views = this.views.get(conditionValue);
        if (!views) {
            views = new Array();
        }
        views.push(view);
        this.views.set(conditionValue, views);
        console.log(this.views);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], ifElseStar.prototype, "ifElseStar", null);
    ifElseStar = __decorate([
        core_1.Directive({
            selector: '[ifElseStar]'
        }), 
        __metadata('design:paramtypes', [])
    ], ifElseStar);
    return ifElseStar;
}());
exports.ifElseStar = ifElseStar;
//# sourceMappingURL=ifElseStar.directive.js.map