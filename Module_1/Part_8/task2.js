// !!!!!!!!!!!!!!!!!!!!!!!!
// В данном задании ошибка!!!
// Если параметр не передан, то NaN не может быть возвращен,
// т.к. по условию задачи type по умолчанию равен 'odd'


const getSumOfNumbers = (number, type='odd') => {
    if (typeof(number) != 'number') {
        return NaN;
    }
    let sum = 0;
    if (type === 'odd') {
        for (let i=1; i<number+1; i++){ // 0 для суммы никогда не влияет на результат
            sum = (i%2 === 0) ? sum : sum += i; 
        }
    } else if (type === 'even') {
        for (let i=1; i<number+1; i++){ // 0 для суммы никогда не влияет на результат
            sum = (i%2 === 0) ? sum += i : sum; 
        }
    } else if (type === '') {
        for (let i=1; i<number+1; i++){ // 0 для суммы никогда не влияет на результат
            sum += i; 
        }
    }
    return sum;
}

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
console.log(getSumOfNumbers('10', ""));
console.log(getSumOfNumbers(10));
