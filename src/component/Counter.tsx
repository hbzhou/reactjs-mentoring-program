import React from "react";

type Props = {
  initial: number;
};

class Counter extends React.Component<Props, { count: number }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.initial,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return React.createElement(
      "div",
      null,
      `Counter: ${this.state.count}`,
      React.createElement("button", { onClick: this.increment, style: { margin: "8px" } }, "Increment"),
      React.createElement("button", { onClick: this.decrement, style: { margin: "8px" } }, "Decrement")
    );
  }
}

export default Counter;
