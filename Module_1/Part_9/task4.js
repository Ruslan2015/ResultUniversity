const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const newPrices = prices.map((price) => {
    return price * 1.5;
})

coffees.forEach((coffeName, index) => {
    alert(`Кофе ${coffeName} сейчас стоит ${newPrices[index]} евро.`);
})
