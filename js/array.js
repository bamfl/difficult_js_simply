// Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex). Js Массивы.
const arr = [
  { name: 'Alex', age: 30, budget: 5200 },
  { name: 'Ben', age: 62, budget: 3000 },
  { name: 'Drue', age: 22, budget: 2000 },
  { name: 'Eddie', age: 39, budget: 1500 },
  { name: 'Piter', age: 20, budget: 2500 },
  { name: 'Gwen', age: 5, budget: 500 },
  { name: 'Alex', age: 99, budget: 5650 },
];

// console.log(arr);

// Цикл for
for (let index = 0; index < arr.length; index++) {
  // console.log(arr[index]);
}

// Цикл for of
for (let item of arr) {
  // console.log(item);
}

// forEach
arr.forEach((item, idx, arr) => {
  // console.log(item);
});

// map
// const mappedArr = arr.map(item => {
// 	item.age = item.age + 100;

// 	return item;
// });

// console.log(mappedArr);

// filter
const filteredArr = arr.filter((item) => item.budget >= 2000);
// console.log(filteredArr);

// reduce
const accum = arr.map((item) => item.budget).reduce((prev, current) => prev + current, 0);
// console.log(accum);

// find
const found = arr.find((item) => item.name === 'Alex');
// console.log(found);

// findIndex
const index = arr.findIndex((item) => item.budget === 500);
// console.log(index);

// =================
const amount = arr
  .filter((item) => item.budget >= 3000)
  .map((item) => {
    return {
      info: `${item.name} (${item.age})`,
      budget: item.budget,
    };
  })
	.reduce((prev, curr) => prev + curr.budget, 0);

console.log(amount);
