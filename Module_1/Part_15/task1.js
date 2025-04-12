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
    console.log(tasks);
});

