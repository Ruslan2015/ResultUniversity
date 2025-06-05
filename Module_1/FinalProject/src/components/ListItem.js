import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    const displayDate = `${this.state.date.getDate()}/${
      this.state.date.getMonth() + 1
    }/${this.state.date.getFullYear()}`;
    const displayTime = `${this.state.date.getHours()}:${this.state.date.getMinutes()}:${this.state.date.getSeconds()}`;
    const str = `${displayDate} ${displayTime} - <b>\$${this.state.amount}</b>`;

    this.$rootElement.innerHTML = str;

    // ...
  }
}
