function getSumOfSequence(number) {
    let secArray = [];
    for (i=1; i<number+1; i++) {
        secArray.push(i);
    }

    let firstElemet = secArray[0];
    let lastElement = secArray[secArray.length-1];
    let sum = firstElemet + lastElement;
    return sum;
}

console.log(getSumOfSequence(5));
