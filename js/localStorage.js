// Урок 17. JavaScript. Все о LocalStorage
const myNumber = 42;

localStorage.setItem('myNumber', myNumber); // данные переводятся в строку .toString() за кулисами
console.log(localStorage.getItem('myNumber')); // строка

localStorage.setItem('myString', 'Строка'); // данные переводятся в строку .toString() за кулисами
console.log(localStorage.getItem('myString'));

localStorage.removeItem('myString'); // удлаить эл-т

localStorage.clear(); // очистка

const obj1 = {
	name: 'Alex',
	age: 35
};

localStorage.setItem('person', JSON.stringify(obj1)); // добавить объект и привести к строке
const obj2 = JSON.parse(localStorage.getItem('person')); // получить объект и привести к обекту
console.log(obj2); 

obj2.name = 'Linda';
console.log(obj2);

window.addEventListener('storage', (event) => {
	console.log(event); // выводится в консоль если дулировать вкладку
});
