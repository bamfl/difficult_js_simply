// Урок 8. JavaScript. Как работает Async, Await. Работа с сервером c fetch
const delay = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const data = {name: 'Dmitriy', age: 27};

			resolve(data);	
		}, ms);
	});
};

// delay(2000).then((data) => console.log(data));

const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos(url) {
	console.log('Fetch start');

	return delay(2000)
		.then(() => fetch(url))
		.then(dataJson => dataJson.json());
}

fetchTodos(url)
	.then(data => console.log(data));


// Та же функция с помощью async/await
// async пишется перед function
// await пишится перед возвратом Promise
const asyncFetchTodos = async (url) => {
	console.log('Fetch start');

	await delay(2000);
	const dataJson = await fetch(url);

	return await dataJson.json();
};

asyncFetchTodos(url)
	.then(data => console.log(data));
