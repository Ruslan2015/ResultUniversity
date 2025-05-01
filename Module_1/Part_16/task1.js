const url = 'https://jsonplaceholder.typicode.com/users';

//
function outputListName(users) {
	const list = document.getElementById("data-container");
	for (const user of users) {
        const newRecord = document.createElement("li");
        newRecord.innerHTML = `<a href="#">${user.name}</a>`;
		list.append(newRecord);		
	}
}

fetch(url) 
	.then((response) => {
		if (!response.ok) {
			throw new Error("Ошибка запроса");
		}
		return response.json(); 
	}) 
	.then((data) => {
		outputListName(data); 
	}) 
	.catch((error) => {
		console.log(error); 
	}) 
	.finally(() => {
		const loader = document.getElementById("loader");
		loader.style.display = "none"; 
	});
