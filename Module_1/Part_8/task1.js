function getName1(name) {
    return `Имя равно ${name}`;
}

const getName2 = function(name) {
    return `Имя равно ${name}`;
}

const getName3 = (name) => `Имя равно ${name}`;

console.log(getName1('Ruslan'));
console.log(getName2('Igor'));
console.log(getName3('Alex'));

