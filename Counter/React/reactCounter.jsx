import React, { Component } from "react";

class ReactCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div>React Counter</div>
        <button onClick={this.decCount}>-</button>
        {this.state.count}
        <button onClick={this.incCount}>+</button>
      </>
    );
  }
}

export default ReactCounter;
