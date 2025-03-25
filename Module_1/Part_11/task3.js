const today = new Date();

const addDay = (date, days) => {
    const addMs = days * 3600 * 24 * 1000;
    const newDate = new Date(date.getTime() + addMs);
    return newDate;
}

const addDays = 10;

console.log(`Через ${addDays} дней будет ${addDay(today, addDays)}`);