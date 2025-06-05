import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const hListContainer = document.createElement("h2");
    hListContainer.className = "donates-container__title";
    hListContainer.textContent = "Список донатов";

    const listContainer = document.createElement("div");
    listContainer.className = '"donates-container__donates"';
    this.listContainer = listContainer;

    this.$rootElement.appendChild(hListContainer);
    this.$rootElement.appendChild(listContainer);
    // ...
  }

  addItem(item) {
    // ...
    this.listContainer.appendChild(item.$rootElement);
  }
}
