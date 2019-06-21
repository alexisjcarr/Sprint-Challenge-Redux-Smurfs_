import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import SmurfList from "./SmurfList";
import Smurf from "./Smurf";

const App = () => {
  return (
    <div className="App">
      <Route path="/smurfs" component={SmurfList} />
      <Route path="/smurfs/:id" component={Smurf} />
    </div>
  );
};

export default App;
