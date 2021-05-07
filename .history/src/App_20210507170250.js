import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

import React from "react";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
