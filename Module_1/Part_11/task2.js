const nextBirthdayDate = new Date('2025-06-14');
const today = new Date();

const diff = Math.round((nextBirthdayDate - today) / 86400 / 1000);

console.log(`До дня рождения осталось ${diff} дней.`);
