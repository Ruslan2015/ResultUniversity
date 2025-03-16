let clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const answer = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`));
    if (answer > 0 && answer <= 10) {
        clientsEstimations.push(answer);
    }
}

for (i=0; i<5; i++) {
    askClientToGiveEstimation();
}

let goodEstimations = clientsEstimations.filter((est) => est > 5).length;

let notGoodEstimations = clientsEstimations.filter((est) => est <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}.`);