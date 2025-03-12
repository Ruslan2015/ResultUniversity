const getDivisorsCount = (number) => {
    let answer = `Делители числа ${number}: `;
    if (Number.isInteger(number)) {
        for(let i=1; i<number+1; i++){
            if (number%i === 0) {
                answer += `${String(i)}, `;
            }
        }
        return answer.slice(0, answer.length-2);
    } else {
        alert(`${number} должен быть целым числом`);
        return;
    }
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
