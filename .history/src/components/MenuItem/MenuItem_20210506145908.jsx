import React from "react";
import "./MenuItem.scss";
const MenuItem = ({ title, imageUrl }) => {
  return (
    <div style={{
      backgroundImage={imageUrl}
    }} className="menu-item">
      <div className="content">
        <img src={imageUrl} alt="productImage" />
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
