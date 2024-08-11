//your JS code here. If required.
const urls = 'https://jsonplaceholder.typicode.com/todos/1';

async function fetchData() {
	try{	
		const response = await fetch(urls);
		const data = await response.json();
		console.log(data);
	}catch(error) {
		console.log(error);
	}
}
fetchData();