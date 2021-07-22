// 'use strict';

// This указывает на тот объект в контексте которого была вызвана функция

// 1 This
console.log(this); // window


// 2 this в Function Declaration
function showThis() {
	console.log(this);
}

showThis(); // window или undefined в use strict


// 2 this в Function Expression
const showThisFnExp = function() {
	console.log(this);
};

showThisFnExp(); // window или undefined в use strict


// 3 this в Arrrow Function
const arrFn = () => {
	console.log(this);
};

arrFn(); // window, arrow fn не имеет своего this, а берет его у родителя


// 4 this в объектах
const obj = {
	name: 'Dmitriy',
	age: 27,

	showThis() {
		console.log(this);
	},

	showThisFnDeclar() {
		function showThisInsideMethod() {
			console.log(this);
		}

		return showThisInsideMethod();
	},

	showThisArrFn() {
		const arrFn = () => {
			console.log(this);
		};

		arrFn();
	}
};

obj.showThis(); // {name: "Dmitriy", age: 27, showThis: ƒ} this в методе объекта - сам объект
obj.showThisFnDeclar(); // вернет window или undefined в use strict
obj.showThisArrFn(); // {name: "Dmitriy", age: 27, showThis: ƒ}, т.к. arrFn берез this у родителя - showThisArrFn


// 5 this в классах
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	showThis() {
		console.log(this);
	}
}

const dima = new Person('Dima', 27);
dima.showThis(); // Person {name: "Dima", age: 27} this в методе экземпляра класса - сам новый объект


// 6 this в функциях-конструкторах
function Persone1(name, age) {
	this.name = name;
	this.age = age;

	this.showThis = function() {
		console.log(this);
	};
}

const ksenia = new Persone1('Ksenia', 30);
ksenia.showThis(); // Persone1 {name: "Ksenia", age: 30, showThis: ƒ} this в методе экземпляра функции-конструктора - сам новый объект


// Привязывание this к функции, работает только без use strict
const obj2 = {
	name: 'Lena',
	age: 40
};

function showPerson(isHappy) {
	console.log(this.name, this.age, isHappy);
}

showPerson(); // undefined или ошибка в use strict, т.к. нет this

// добавим this с помощью call
showPerson.call(obj2, true); // Lena 40 true; в use strict - ошибка

// добавим this с помощью apply
showPerson.apply(obj2, [false]); // Lena 40 false; в use strict - ошибка

// добавим this с помощью bind
const newShowPerson = showPerson.bind(obj2); // создаем новую функцию с привязанным объектом
newShowPerson(true); // Lena 40 true, в use strict - ошибка; вызываем новую фунцию и передаем ей аргументы



const arr = [1, 2, 3, 4, 5];

function multiple(arr, n) {
	return arr.map(item => item * n);
}

console.log(multiple(arr, 10));

Array.prototype.multiple = function(n) {
	return this.map(item => item * n);
};

const multArr = arr.multiple(10);
console.log(multArr);
