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
var myFor = (function () {
    function myFor(_vcr, _el) {
        this._vcr = _vcr;
        this._el = _el;
        this.array = [];
    }
    Object.defineProperty(myFor.prototype, "myFor", {
        set: function (array) {
            this.array = array;
            this.runLoop();
        },
        enumerable: true,
        configurable: true
    });
    myFor.prototype.runLoop = function () {
        var _this = this;
        this._vcr.clear();
        if (!this.child)
            return;
        this.array.forEach(function (item) {
            _this._vcr.createEmbeddedView(_this.child, {
                item: item
            });
        });
    };
    __decorate([
        core_1.ContentChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], myFor.prototype, "child", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], myFor.prototype, "myFor", null);
    myFor = __decorate([
        core_1.Directive({
            selector: '[myFor]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ElementRef])
    ], myFor);
    return myFor;
}());
exports.myFor = myFor;
//# sourceMappingURL=myFor.directive.js.map