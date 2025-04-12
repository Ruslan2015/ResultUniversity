let tasks = [
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

function deleteTask(id) {
    const tmpArray = [];
    tasks.forEach((elem) => {
        if (!(elem.id === id)) {
            tmpArray.push(elem);
        }
    })
    tasks = tmpArray;
    const sel = `[data-task-id='${id}']`;
    const delTask = document.querySelector(sel);
    delTask.remove();
    //console.log(tasks);
}

let stateCanselButton = false;
let stateConfirmButton = false;
let currentId = '';
let darkTheme = false;

function toLight() {
    darkTheme = false;
    const body = document.querySelector("body");
    const taskItems = document.querySelectorAll(".task-item");
    const buttons = document.querySelectorAll("button");
    body.style.backgroundColor = '#ffffff';
    taskItems.forEach((taskItem) => {
        taskItem.style.color = "#000000";
    })
    buttons.forEach((button) => {
        button.style.border = 'none';
    })
        
}

function toDark() {
    darkTheme = true;
    const body = document.querySelector("body");
    const taskItems = document.querySelectorAll(".task-item");
    const buttons = document.querySelectorAll("button");
    body.style.backgroundColor = '#24292E';    
    taskItems.forEach((taskItem) => {
        taskItem.style.color = "#ffffff";
    })
    buttons.forEach((button) => {
        button.style.border = '1px solid #ffffff';
    })
}

document.addEventListener("keydown", (event) => {
	const key = event.key;  
	if (key === 'Tab') {
        event.preventDefault();
        if (darkTheme) {
            toLight();
        } else {
            toDark();
        }
    }
});

const cancelButton = document.querySelector(".delete-modal__cancel-button");
cancelButton.addEventListener("click", (event) => {
    stateCanselButton = true;
    const task = event.target.closest(".modal-overlay");
    classes = task.classList;
    classes.add("modal-overlay_hidden");
})

const confirmButton = document.querySelector(".delete-modal__confirm-button");
confirmButton.addEventListener("click", (event) => {
    stateConfirmButton = true;
    const task = event.target.closest(".modal-overlay");
    classes = task.classList;
    classes.add("modal-overlay_hidden");
    deleteTask(currentId);
    currentId = '';
})

const tasksList = document.querySelector(".tasks-list");

tasksList.addEventListener("click", (event) => {
    const task = event.target.closest(".task-item");
    currentId = task.dataset.taskId;
    const modal = document.querySelector(".modal-overlay");
    const classes = modal.classList;
    classes.remove('modal-overlay_hidden');
})

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
            const id = String(Date.now());
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
    //console.log(tasks);
});

