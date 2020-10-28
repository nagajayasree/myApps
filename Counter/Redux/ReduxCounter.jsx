import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxCounter extends Component {
  inc = () => {
    this.props.dispatch({ type: "INC" });
  };
  dec = () => {
    this.props.dispatch({ type: "DEC" });
  };

  render() {
    return (
      <>
        <div>Redux Counter</div>
        <button onClick={this.dec}>-</button>
        {this.props.count}
        <button onClick={this.inc}>+</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(ReduxCounter);
