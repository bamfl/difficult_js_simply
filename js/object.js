// Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters
// const obj1 = {
// 	name: 'Alex',
// 	age: 35,
// 	job: 'frontend'
// };

const obj1 = Object.create({}, {
	name: {
		value: 'Alex',
		enumerable: true, // перебираемо ли св-во с помощью цикла for, по умолчанию false
		writable: false, // возможно ли перезаписать св-во, по-умолчанию false
		configurable: false // возможно ли удалять поле через delete
	},
	age: {
		value: 35,
		enumerable: true, // перебираемо ли св-во с помощью цикла for, по умолчанию false
		writable: false, // возможно ли перезаписать св-во, по-умолчанию false
		configurable: false // возможно ли удалять поле через delete
	},
	job: {
		value: 'frontend',
		enumerable: true, // перебираемо ли св-во с помощью цикла for, по умолчанию false
		writable: false, // возможно ли перезаписать св-во, по-умолчанию false
		configurable: false // возможно ли удалять поле через delete
	}
}); // первый объект {} - это prototype, второй объект {} - сам объект 

console.log(obj1);

// Установитть прототип
const obj2 = Object.create(obj1);
obj2.name = 'Kate';
console.log(obj2);


// Установитть прототип
const obj3 = {
	name: 'Bruno'
};

Object.setPrototypeOf(obj3, obj2);
console.log(obj3);


// getters и setters у объекта
const person = {
	_name: 'Jane',
	_birthYear: 1996,
	_job: 'SMM',

	get age() {
		return 2021 - this._birthYear;
	},

	get birthYear() {
		return this._birthYear;
	},

	set birthYear(newBirthYear) {
		this._birthYear = newBirthYear;
	}
};

console.log(person.age); // getter
console.log(person._birthYear); // getter

person.birthYear = 2000; // setter
console.log(person);


// getters и setters у экземпляра класса
class Person {
	constructor(name, birthYear, job) {
		this._name = name;
		this._birthYear = birthYear;
		this._job = job;
	}

	get age() {
		return 2021 - this._birthYear;
	}

	get job() {
		return this._job;
	}

	set job(newJob) {
		this._job = newJob;
	}
}

const maryana = new Person('Maryana', 2018, 'kid');
console.log(maryana.age); // getter
console.log(maryana.job); // getter

maryana.job = 'child'; // setter
console.log(maryana);