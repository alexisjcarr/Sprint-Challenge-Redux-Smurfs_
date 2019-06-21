import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfList);
