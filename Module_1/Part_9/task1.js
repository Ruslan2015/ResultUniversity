const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParce = () => {
    alert(`${peopleWaiting[0]} получил(а) посылку!`);
    peopleWaiting.shift();
}

const leaveQueueWithoutParcel = () => {
    alert(`${peopleWaiting[peopleWaiting.length-1]} не получил(а) посылку и ушел(ла) из очереди`);
    peopleWaiting.pop();
}

for (let i=0; i<3; i++) giveParce();
for (let i=0; i<4; i++) leaveQueueWithoutParcel();
