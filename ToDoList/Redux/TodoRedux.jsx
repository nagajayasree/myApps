import React, { Component } from "react";
import { connect } from "react-redux";

class TodoRedux extends Component {
  render() {
    return (
      <>
        <form>
          <input className="input" type="text" value={this.props.input} />
          <div className="button">
            <button className="btn btn-primary">Add</button>
          </div>
          {/* <div>{this.props.input}</div> */}
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.input,
  items: state.items,
});

export default connect(mapStateToProps)(TodoRedux);
