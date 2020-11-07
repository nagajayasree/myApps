import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "./store";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  upadateInput = (input) => {
    this.setState({ input });
  };

  handleTodo = () => {
    this.props.addItem(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <>
        <form>
          <input
            className="input"
            onChange={(e) => this.upadateInput(e.target.value)}
            value={this.state.input}
          />
          <div className="button">
            <button className="btn btn-primary" onClick={this.handleTodo}>
              Add
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default connect(null, { addItem })(AddTodo);
