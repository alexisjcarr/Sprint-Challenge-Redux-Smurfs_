import React from "react";

const Smurf = props => {
  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <p>age: {props.smurf.age} in Smurf years</p>
      <p>height: {props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
