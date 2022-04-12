function ExampleConstructor() {}
console.log('function prototype: ', ExampleConstructor.prototype);
console.log('typeof prototype: ', typeof ExampleConstructor.prototype);

var sample = new ExampleConstructor();
console.log('new exampconst: ', sample);

var checkInstance = sample instanceof ExampleConstructor;
console.log('is sample instanceof?: ', checkInstance);
