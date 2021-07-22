// Урок 3. JavaScript. Что такое замыкания. Как они работают (+ примеры)
// Замыкание - процесс при котором вложенная функция имеет доступ к области видимости (Scope) родительской функции со всеми переменными
function multiply(n) {
	return function(a) {
		return a * n;
	};
}

const double = multiply(2); // Вызов функции замыкает все переменные в Scope и помещает в closure
console.dir(double); // [[Scopes]] --> 0: Closure (multiply) {n: 2}

console.log(double(10)); // 2 * 10 --> 20


function createCounter() {
	let counter = 0;

	return function() {
		return ++counter;
	};
}

const counter1 = createCounter(); // Вызов функции замыкает все переменные в Scope и помещает в closure
console.dir(counter1); // [[Scopes]] --> 0: Closure (multiply) {counter: 0}

console.log(counter1()); // [[Scopes]] --> 0: Closure (multiply) {counter: 1} 0 + 1 --> 1
console.log(counter1()); // [[Scopes]] --> 0: Closure (multiply) {counter: 2} 1 + 1 --> 2
console.log(counter1()); // [[Scopes]] --> 0: Closure (multiply) {counter: 3} 2 + 1 --> 3


function logPerson() {
	console.log(`Person ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Alex', age: '30', job: 'frontend'};
const person2 = {name: 'Max', age: '20', job: 'fullstack'};

function bind(context, cbFn) {
	return function(...params) {
		cbFn.call(context, ...params);
	};
}

const bound1 = bind(person1, logPerson);
const bound2 = bind(person2, logPerson);

bound1(1, 10, 12);
bound2(1, 10, 12);
