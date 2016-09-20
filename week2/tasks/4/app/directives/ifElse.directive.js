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
var ifElse = (function () {
    function ifElse(_vcr, _el) {
        this._vcr = _vcr;
        this._el = _el;
    }
    ifElse.prototype.ngAfterContentInit = function () {
        this.reeval();
    };
    Object.defineProperty(ifElse.prototype, "ifElse", {
        set: function (cond) {
            this.cond = cond;
            this.reeval();
        },
        enumerable: true,
        configurable: true
    });
    ifElse.prototype.reeval = function () {
        this._vcr.clear();
        if (this.cond) {
            this._vcr.createEmbeddedView(this.trueEl);
        }
        else {
            this._vcr.createEmbeddedView(this.falseEl);
        }
    };
    __decorate([
        core_1.ContentChild('true'), 
        __metadata('design:type', core_1.TemplateRef)
    ], ifElse.prototype, "trueEl", void 0);
    __decorate([
        core_1.ContentChild('false'), 
        __metadata('design:type', core_1.TemplateRef)
    ], ifElse.prototype, "falseEl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], ifElse.prototype, "ifElse", null);
    ifElse = __decorate([
        core_1.Directive({
            selector: '[ifElse]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ElementRef])
    ], ifElse);
    return ifElse;
}());
exports.ifElse = ifElse;
//# sourceMappingURL=ifElse.directive.js.map