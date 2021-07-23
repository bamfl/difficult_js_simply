// Урок 15. JavaScript. Все о Spread и Rest

// Spread - разворачивать
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const arr1Copy = [...arr1]; // копия массива
console.log(arr1);

const arrCopy = [...arr1, ...arr2]; // два массива соединить
console.log(arrCopy);

const obj1 = {
  name: 'Max',
  age: 89,
  hasJob: true,
  weight: 85,
};

const obj2 = {
  name: 'John',
  age: 34,
  hasJob: false,
};

const bewObj = { ...obj2, ...obj1 }; // Одинаковые поля берутся из последнего объекта
console.log(bewObj);

const arr3 = [1, 10, 100];
const summ = (a, b, c) => a + b + c;
console.log(summ(...arr3)); // Разворот массива, эл-ты которого становятся аргументами

const divs = document.querySelectorAll('div');
console.log(divs); // Node List, нет методов масиивов

const arrDivs = [...divs]; // Array с методами
console.log(arrDivs.map(item => { // Изменяем массив эл-ов
	item.classList.add('box');

	return item;
}));


// Rest - собирает оставшиеся аргументы в массив
const summ2 = (a, b, ...rest) => { // Rest
	console.log(rest); // [3, 4, 5, 6] - rest

	return a + b + rest.reduce((value, current) => value + current, 0)
};

const arr4 = [1, 2, 3, 4, 5, 6]

console.log(summ2(...arr4)); // Spread


// Деструктуризация
const [a, b, ...rest] = arr4;
console.log(a, b, rest); // 1 2 [3, 4, 5, 6]

const {weight, age, ...rest1} = obj1;
console.log(weight, age, rest1); // 85 89 {name: "Max", hasJob: true}