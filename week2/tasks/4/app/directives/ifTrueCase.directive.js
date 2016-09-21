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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var ifElseStar_directive_1 = require("./ifElseStar.directive");
var View_1 = require("./View");
var ifTrueCase = (function () {
    function ifTrueCase(_vcr, _el, host) {
        this._vcr = _vcr;
        this._el = _el;
        this._host = host;
        this._view = new View_1.View(this._vcr, this._el);
        this._host.registerView(this._view, true);
    }
    __decorate([
        core_1.Host(), 
        __metadata('design:type', ifElseStar_directive_1.ifElseStar)
    ], ifTrueCase.prototype, "_host", void 0);
    ifTrueCase = __decorate([
        core_1.Directive({
            selector: '[ifTrueCase]'
        }),
        __param(2, core_1.Host()), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef, ifElseStar_directive_1.ifElseStar])
    ], ifTrueCase);
    return ifTrueCase;
}());
exports.ifTrueCase = ifTrueCase;
//# sourceMappingURL=ifTrueCase.directive.js.map