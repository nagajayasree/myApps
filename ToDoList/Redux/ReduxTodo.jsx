import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class ReduxTodo extends Component {
  // addItem = () => {
  //   this.props.dispatch({ type: "ADD_ITEM" });
  // };

  // delItem = () => {
  //   this.props.dispatch({ type: "DELETE_ITEM" });
  // };

  render() {
    return (
      <>
        <AddTodo />
        <TodoList todos={this.props.items} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  // input: state.input,
  items: state.items,
});

export default connect(mapStateToProps)(ReduxTodo);
