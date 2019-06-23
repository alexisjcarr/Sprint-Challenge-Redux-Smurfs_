import React, { Component } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.addSmurf}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={this.state.smurf.name}
          onChange={this.handleChange}
        />
        <input
          name="age"
          type="text"
          placeholder="age"
          value={this.state.smurf.age}
          onChange={this.handleChange}
        />
        <input
          name="height"
          type="text"
          placeholder="height"
          value={this.state.smurf.height}
          onChange={this.handleChange}
        />
        <button type="submit">add your smurf!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
