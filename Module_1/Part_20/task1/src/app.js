// файл /src/app.js

import { getRundomColor } from "./utils";

export default function initApp() {
  console.log("Hello world");
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Изменить цвет страницы";
  document.querySelector("body").append(button);
  button.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = getRundomColor();
  });
}
