import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup() {
    this.state = {
      total: 0,
      donates: [],
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    const span = document.createElement("span");
    span.textContent = this.state.total;
    this.span = span;

    const $heading = document.createElement("h1");
    $heading.textContent = "Итого:$ ";
    $heading.className = "total-amount";
    $heading.appendChild(span);

    this.$rootElement.appendChild($heading);
    // ...

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);

    this.donateList = donateList;
  }

  onItemCreate(amount) {
    // ...

    const item = new ListItem({ amount: amount });
    this.state.donates.push(item);

    this.donateList.addItem(item);
    this.state.total += Number(amount);
    this.span.textContent = this.state.total;
  }
}
