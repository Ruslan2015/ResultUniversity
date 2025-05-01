const url = 'https://api.slingacademy.com/v1/sample-data/photos';


function outputImg(data_img) {
    console.log(data_img);
	const img = document.querySelector(".photo-item__image");
    img.setAttribute("src", `${data_img.photo.url}`);
    const h3 = document.querySelector(".photo-item__title");
    h3.textContent = data_img.photo.title;
}

const fetchArray = [];


function getFastestLoadedPhoto(array) {
    for(const item of array) {
        fetchArray.push(fetch(`${url}/${item}`));
    }
}

getFastestLoadedPhoto([60, 12, 55]);


Promise.race(fetchArray)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Ошибка запроса");
        }
        return response.json(); 
    })
    .then((data) => {
        outputImg(data);
    })
    .catch((error) => {
        console.log(error); 
    }) 
    .finally(() => {
        const loader = document.getElementById("loader");
        loader.style.display = "none"; 
    });