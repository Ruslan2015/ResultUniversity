const users = [
	{
	    username: 'David',
	    status: 'online',
	    lastActivity: 10
	},
	{
	    username: 'Lucy',
	    status: 'offline',
	    lastActivity: 22
	},
	{
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

let onlineUsers = [];
let strOnlineUsers = '';

for (let key of users) {
    if (key.status === "online") {
        onlineUsers.push({
            username: key.username,
            status: key.status,
            lastActivity: key.lastActivity
        });

        strOnlineUsers += `${key.username}, `;
    }
}

alert(`Сейчас в онлайн следующие пользователи: ${strOnlineUsers.slice(0, strOnlineUsers.length-2)}`);