import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

import React from "react";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
