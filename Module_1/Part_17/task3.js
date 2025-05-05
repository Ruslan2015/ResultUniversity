function outputListName(albums) {
	const list = document.getElementById("data-container");
	for (const album of albums) {
        const newRecord = document.createElement("li");
        newRecord.innerHTML = `<a href="#">${album.id} - ${album.title}</a>`;
		list.append(newRecord);		
	}
}


const TODOS_URL = 'https://jsonplaceholder.typicode.com/albums';
const renderAlbums = async () => {
    try {
        const response = await fetch(`${TODOS_URL}`);
        const result = await response.json();
        outputListName(result);
        const loader = document.getElementById("loader");
        loader.style.display = "none"; 
    }
    catch(error) {
      console.log(error);
      const loader = document.getElementById("loader");
      loader.innerText = 'Ошибка соединения';
    }
    
}
renderAlbums();