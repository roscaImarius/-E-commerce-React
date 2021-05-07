import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

import React from "react";
import ShopData from "./pages/shop/ShopData";

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
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopData} />
      </Switch>
    </div>
  );
}

export default App;
