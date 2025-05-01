const url = 'https://jsonplaceholder.typicode.com/users';

//
function outputListName(users) {
	const list = document.getElementById("data-container");
	for (const user of users) {
        const newRecord = document.createElement("li");
        newRecord.innerHTML = `<a href="#">${user.id} - ${user.name}</a>`;
		list.append(newRecord);		
	}
}

const fetchArray = [];

function getUsersById(array) {
    for(const item of array) {
        fetchArray.push(fetch(`${url}/${item}`));
    }
}

getUsersById([5, 6, 2, 1]);

Promise.all(fetchArray)
.then(responses => {    
    const results = responses.map(response => response.json());
    return Promise.all(results); 
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