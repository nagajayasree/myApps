import React, { Component } from "react";
import ListItems from "./ListItems";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      console.log(newItem.text);
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filteredItems });
  };

  render() {
    return (
      <>
        <h5 className="title">React Todo List</h5>
        <form onSubmit="">
          <input
            className="input"
            type="text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <div className="button">
            <button className="btn btn-primary" onClick={this.addItem}>
              Add
            </button>
          </div>
        </form>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} />
      </>
    );
  }
}

export default Todo;
