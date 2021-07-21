const p = new Promise((resolve, reject) => {
	console.log('Запрос данных...');

	setTimeout(() => {	
		console.log('Подготовка данных');

		const data = {
			name: 'Dmitriy',
			age:27
		};		

		resolve(data);
		// reject('Ошибка');
	}, 2000);
});

p
.then(item => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Данные получены');
			console.log(item);

			resolve(item);
			// reject('Ошибка');			
		}, 2000);
	});	
})
.catch(err => console.err(err))
.finally(() => console.log('Выполняется всегда'));


// Promise all и race
const p1 = new Promise(resolve => {
	setTimeout(() => {		
		resolve();
	}, 100);
});

const p2 = new Promise(resolve => {
	setTimeout(() => {		
		resolve();
	}, 5000);
});

Promise.all([p1, p2]).then(() => console.log('All')); //5000
Promise.race([p1, p2]).then(() => console.log('Race')); // 100
