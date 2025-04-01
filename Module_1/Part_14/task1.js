const addHtml = `<form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль">
        </label>
        <button type="submit">
            Подтвердить
        </button>
    </form>`;

const addHtmlElementInner = document.querySelector("#innerhtml");
addHtmlElementInner.innerHTML = addHtml;

const inputElemName = document.createElement("input");
inputElemName.type = "text";
inputElemName.name = "userName";
inputElemName.placeholder = "Введите ваше имя";

const inputElemPass = document.createElement("input");
inputElemPass.type = "password";
inputElemPass.name = "password";
inputElemPass.placeholder = "Придумайте Пароль";

const labelElemName = document.createElement("label");
labelElemName.innerText = " Имя ";
const labelElemPass = document.createElement("label");
labelElemPass.innerText = " Пароль ";

const btnSubmit = document.createElement("button");
btnSubmit.type = "submit";
btnSubmit.innerText = " Подтвердить ";

const frmCreateUserForm = document.createElement("form");
frmCreateUserForm.className = "create-user-form";

const addHtmlElementCreate = document.querySelector("#create_element");

addHtmlElementCreate.append(frmCreateUserForm);
frmCreateUserForm.append(labelElemName);
frmCreateUserForm.append(labelElemPass);
frmCreateUserForm.append(btnSubmit);
labelElemName.append(inputElemName);
labelElemPass.append(inputElemPass);
