let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i++) {
    curNumber = numbers[i] ** 3;
    debugger;
    sum += curNumber;
} 
console.log(sum);

// Через цикл for of
sum = 0;
for (let num of numbers){
    num = num ** 3;
    debugger;
    sum += num;
} 
console.log(sum);
