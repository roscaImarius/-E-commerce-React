import React, { Component } from "react";
import "./ShopData";
import ShopData from "./ShopData";

export class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: ShopData,
    };
  }
  render() {
    return <div></div>;
  }
}

export default Shop;
