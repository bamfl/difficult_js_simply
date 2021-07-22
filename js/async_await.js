// Урок 8. JavaScript. Как работает Async, Await. Работа с сервером c fetch
const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos(url) {
	return fetch(url).then(response => response.json());
}

fetchTodos(url).then(data => console.log(data));


// Та же функция с помощью async/await
// async пишется перед function
// await пишится перед возвратом Promise
const asyncFetchTodos = async (url) => {
	const response = await fetch(url);

	return await response.json();
};

asyncFetchTodos(url).then(data => console.log(data));
