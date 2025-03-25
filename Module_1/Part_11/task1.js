const mydate = new Date();

const getDateFormat = (mydate, separator = '.') => {
    const year = mydate.getFullYear();
    const month = (String(mydate.getMonth()).length === 2) ? mydate.getMonth() : `0${mydate.getMonth()}`;
    const day = (String(mydate.getDate()).length === 2) ? mydate.getDate() : `0${mydate.getDate()}`;
    const formatDate = `${day}${separator}${month}${separator}${year}`;
    return formatDate;
}

console.log(getDateFormat(mydate));
