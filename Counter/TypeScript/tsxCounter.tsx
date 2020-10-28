import * as React from "react";

export interface MyProps {
  name: string;
}

export interface MyState {
  count: number;
}

class Counter extends React.Component<MyProps, MyState> {
  state: MyState = { count: 0 };
  inc = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  dec = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };
  render() {
    return (
      <>
        <div>{this.props.name}</div>
        <button onClick={this.dec}>-</button>
        {this.state.count}
        <button onClick={this.inc}>+</button>
      </>
    );
  }
}

export default Counter;
