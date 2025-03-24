

const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

const getPeopleAtId = (id, people) => {
    let newName = '';
    people.forEach(peopleElement => {
        if (peopleElement.id === id) {
            newName = peopleElement.name;
        }
    });
    return newName;
}

const giveTalonsInOrder = (people, ordersArr) => {
    let resultArray = [];
    ordersArr.forEach(element => {        
        resultArray.push({
            id: element,
            name: getPeopleAtId(element, people)
        });
    });
    return resultArray;
}
 
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);

