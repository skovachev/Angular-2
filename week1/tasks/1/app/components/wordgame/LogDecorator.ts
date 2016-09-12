function LogDecorator(target: Object, propertyKey: string, descriptor: any) {
    return {
        value: function (...args: any[]) {
            var argumentList = args.map(a => JSON.stringify(a)).join(', ');
            var result = descriptor.value.apply(this, args);
            var message = `Called ${propertyKey}`;
            if (argumentList) {
            	message += ` with ${argumentList}`;
            }
            console.log(message);
            return result;
        }
    };
}

export {
	LogDecorator
};