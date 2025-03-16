const numbers = [10, 4, 100, -5, 54, 2];

let sumFor = 0;
for (i=0; i<numbers.length; i++) {
    sumFor += numbers[i];
}
console.log(`Сумма, расчитанная с помощью цикла For: ${sumFor}`);


let sumForOf = 0;
for (elem of numbers) {
    sumForOf += elem;
}

console.log(`Сумма, расчитанная с помощью цикла ForOf: ${sumForOf}`);


let sumForEach = 0;
numbers.forEach((elem) => {
    sumForEach += elem;
});

console.log(`Сумма, расчитанная с помощью цикла ForEach: ${sumForEach}`);

let sumReduce = numbers.reduce((acc, elem) => {
    return acc + elem;
}, 0);

console.log(`Сумма, расчитанная с помощью цикла Reduce: ${sumReduces}`);