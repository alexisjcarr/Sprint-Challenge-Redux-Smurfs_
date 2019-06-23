import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions";

class Smurf extends Component {
  deleteSmurf = id => {
    this.props.deleteSmurf(id);
    window.location.reload();
  };
  render() {
    return (
      <div>
        <h1>
          {this.props.smurf.name}{" "}
          <button onClick={() => this.deleteSmurf(this.props.id)}>
            <i className="fas fa-user-times" />
          </button>
        </h1>
        <p>age: {this.props.smurf.age} in Smurf years</p>
        <p>height: {this.props.smurf.height}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingSmurf: state.deletingSmurf
  };
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurf);
