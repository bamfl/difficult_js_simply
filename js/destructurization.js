// Урок 16. JavaScript. Все о Деструктуризации в JS

// Массивы
const calcValues = (a, b) => {
	return [
		a + b,
		a - b,
		a * b,
		a / b,
		a ** b
	];
};

const result = calcValues(42, 10);

// const summ = result[0];
// const sub = result[1];

const [summ, sub] = result;
console.log(summ, sub);

const [summ1, sub1] = calcValues(42, 10);
console.log(summ1, sub1);

const [summ2 = 'Значение по умолчанию', , mult2, ...rest] = calcValues(42, 10); // пропускаем sub2
console.log(summ2, mult2, rest);


// Объекты
const person = {
	name: 'Max',
	age: 20,
	address: {
		country: 'Russia',
		city: 'Rostov'
	}
};

const { 
	name: userName = 'Значение по умолчанию',
	age,
	address, 
	address: {city: town = 'Значение по умолчанию', country}, 
	car = 'Значение по умолчанию' 
} = person;

console.log(userName, age, address, car);

const person1 = {
	name: 'Alex',
	age: 64,
	address: {
		country: 'Russia',
		city: 'Rostov'
	}
};

const { name: userName1, ...rest1 } = person1;

console.log(userName1, rest1);


const logUser = ({name, age, address: {city}}) => {
	console.log(`${name} is ${age} and he lives in ${city}`);
};

logUser(person1);
