"use strict";
function LogDecorator(target, propertyKey, descriptor) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var argumentList = args.map(function (a) { return JSON.stringify(a); }).join(', ');
            var message = "Called " + propertyKey;
            if (argumentList) {
                message += " with " + argumentList;
            }
            console.log(message);
            return descriptor.value.apply(this, args);
        }
    };
}
exports.LogDecorator = LogDecorator;
//# sourceMappingURL=LogDecorator.js.map