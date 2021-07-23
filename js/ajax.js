// Урок 14. JavaScript. Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax
const url = 'https://jsonplaceholder.typicode.com/users';

// XHR
const sendXHRRequest = (method, url, body = null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(body));

    xhr.addEventListener('load', () => {
      if (xhr.status >= 400) {
        reject(xhr.status);
      } else {
        resolve(JSON.parse(xhr.response));
      }
    });
  });
};

// sendXHRRequest('GET', url, {})
// 	.then(data => console.log(data))
// 	.catch(e => console.error(`Error ${e}`));

// sendXHRRequest('POST', url, { name: 'Dmitriy', age: 27 })
// 	.then(data => console.log(data))
// 	.catch(e => console.error(`Error ${e}`));

// Fetch
const sendFetchRequest = async (method, url, body = null) => {
  let response;

  if (method === 'GET') {
    response = await fetch(url);
  } else if (method === 'POST') {
    response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

	if (!response.ok) {
		throw new Error(response.status);
	}

  return await response.json();
};

sendFetchRequest('GET', url)
	.then((data) => console.log(data))
	.catch(e => console.error(`Error ${e}`));

sendFetchRequest('POST', url, { name: 'Ksenia', age: 30 })
	.then((data) => console.log(data))
	.catch(e => console.error(`Error ${e}`));
