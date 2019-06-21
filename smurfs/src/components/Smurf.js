import React, { Component } from "react";
import { Link } from "react-router-dom";

class Smurf extends Component {
  render() {
    return (
      <Link to={`/smurfs/${this.props.id}`}>
        <h1>
          {this.props.smurf.name} <i className="fas fa-user-minus" />
        </h1>
        <p>age: {this.props.smurf.age} in Smurf years</p>
        <p>height: {this.props.smurf.height}</p>
      </Link>
    );
  }
}

export default Smurf;
