import React, { Component } from "react";

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

  render() {
    return (
      <form>
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

export default SmurfForm;
