import React, { Component } from "react";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";
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
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
