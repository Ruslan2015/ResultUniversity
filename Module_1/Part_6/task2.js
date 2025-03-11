const question_1 = 'Сколько будет 2 + 2?';
const question_2 = 'Сколько будет 2 * 2?';
const question_3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок осталось у Пети?';
const question_4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько с итоге конфет осталось у Маши?';
const question_5 = 'Сколько будет 2 + 2 * 2?';

const answer_1 = 4;
const answer_2 = 4;
const answer_3 = 1;
const answer_4 = 12;
const answer_5 = 8;

const textCorretcAnswer = 'Ответ верный!';
const textIncorretcAnswer = 'Ответ неверный!';

let correctAnswers = 0;
let incorrectAnswers = 0;

const userAnswer_1 = Number(prompt(question_1));
if (userAnswer_1 === answer_1) {
    alert(textCorretcAnswer);
    correctAnswers++;
} else {
    alert(textIncorretcAnswer);
    incorrectAnswers++;
}

const userAnswer_2 = Number(prompt(question_2));
if (userAnswer_2 === answer_2) {
    alert(textCorretcAnswer);
    correctAnswers++;
} else {
    alert(textIncorretcAnswer);
    incorrectAnswers++;
}

const userAnswer_3 = Number(prompt(question_3));
if (userAnswer_3 === answer_3) {
    alert(textCorretcAnswer);
    correctAnswers++;
} else {
    alert(textIncorretcAnswer);
    incorrectAnswers++;
}

const userAnswer_4 = Number(prompt(question_4));
if (userAnswer_4 === answer_4) {
    alert(textCorretcAnswer);
    correctAnswers++;
} else {
    alert(textIncorretcAnswer);
    incorrectAnswers++;
}

const userAnswer_5 = Number(prompt(question_5));
if (userAnswer_5 === answer_5) {
    alert(textCorretcAnswer);
    correctAnswers++;
} else {
    alert(textIncorretcAnswer);
    incorrectAnswers++;
}


alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`);
