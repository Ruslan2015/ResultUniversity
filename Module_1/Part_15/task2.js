const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

function createTask(id, completed, text) {
    const task = `
    <div class="task-item" data-task-id="${id}">
        <div class="task-item__main-container">
            <div class="task-item__main-content">
                <form class="checkbox-form">
                    <input class="checkbox-form__checkbox" type="checkbox" id="task-${id}">
                    <label for="task-${id}"></label>
                </form>
                <span class="task-item__text">
                    ${text}
                </span>
            </div>
            <button class="task-item__delete-button default-button delete-button">
                Удалить
            </button>
        </div>
    </div>
    `;
    return task;
}

function addError(errorName) {
    const error = `
        <span>${errorName}</span>
    `
    const form = document.querySelector(".create-task-block");
    
    if (document.querySelector(".error-message-block")) {
        let errorDiv = document.querySelector(".error-message-block");
        errorDiv.innerHTML = error;
    } else {
        let errorDiv = document.createElement("div");
        errorDiv.className = "error-message-block";
        errorDiv.innerHTML = error;
        form.append(errorDiv);
    }
}    
    

function delError() {
    const errorDiv = document.querySelector(".error-message-block");
    errorDiv.remove();
}

const tasksList = document.querySelector(".tasks-list");

for (const task of tasks) {
    let newTask = createTask(task.id, task.completed, task.text);
    let taskDiv = document.createElement("div");
    taskDiv.innerHTML = newTask;
    tasksList.append(taskDiv);
}

const form = document.querySelector(".create-task-block");
form.addEventListener("submit", (event) => {
	// Код обработчика
    event.preventDefault();
    const text = event.target.elements.taskName.value;
    if (text === '') {
        addError('Название задачи не должно быть пустым');
    } else {
        let noErrP = true;
        for (const task of tasks) {            
            if (task.text === text) {
                addError('Задача с таким названием уже существует');
                noErrP = false;
                break;
            }            
        }
        if (noErrP) {
            if (document.querySelector(".error-message-block")) delError();
            const id = Date.now();
            const compl = false;
            tasks.push({
                id: id,
                completed: compl,
                text: text
            })
            let newTask = createTask(id, compl, text);
            let taskDiv = document.createElement("div");
            taskDiv.innerHTML = newTask;
            tasksList.append(taskDiv);
        }
    }    
    console.log(tasks);
});

