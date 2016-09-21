"use strict";
var View = (function () {
    function View(_viewContainerRef, _templateRef) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    View.prototype.create = function () { this._viewContainerRef.createEmbeddedView(this._templateRef); };
    View.prototype.destroy = function () { this._viewContainerRef.clear(); };
    return View;
}());
exports.View = View;
//# sourceMappingURL=View.js.map