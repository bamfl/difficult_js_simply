// Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex). Js Массивы.
const arr = [
	{ name: 'Alex', age: 30, budget: 5200 },
	{ name: 'Ben', age: 62, budget: 3000 },
	{ name: 'Drue', age: 22, budget: 2000 },
	{ name: 'Eddie', age: 39, budget: 1500 },
	{ name: 'Piter', age: 20, budget: 2500 },
	{ name: 'Gwen', age: 5, budget: 500 }
];

// Цикл for
for (let index = 0; index < arr.length; index++) {
	console.log(arr[index]);	
}

// Цикл for of
for (let item of arr) {
	console.log(item);
}

// forEach
arr.forEach(item => {
	console.log(item);
});

// map
const newArr = arr.map(item => item.age + 100);
console.log(newArr);