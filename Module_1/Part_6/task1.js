const existingUserLogin = 'Ruslan';
const existingUserPassword = '12345678';

const userLogin = prompt('Логин').trim();
const userPassword = prompt('Пароль').trim();

if ((userLogin === existingUserLogin) && (userPassword === existingUserPassword)) {
    alert(`Добро пожаловать ${userLogin}`);
} else {
    alert('Логин и (или) пароль введен не верно!');
}
