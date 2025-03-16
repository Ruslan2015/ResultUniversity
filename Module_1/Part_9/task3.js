const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt("Поиск кофе по названию:");

const searchedCoffee = coffees.find((inCoffeeName, index) => {
    return inCoffeeName === coffeeName;
});

if (searchedCoffee) {
    const index = coffees.findIndex((name) => {
        return name === searchedCoffee;
    });
    alert(`Держите ваш любимый кофе ${searchedCoffee}. Он ${index+1}-й по популярности в нашей кофейне!`);
} else {
    alert("Извините. Такого кофе нет в наличии!");
}

