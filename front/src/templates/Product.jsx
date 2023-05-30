import React, { Component } from "react";
import "./Product.css";
export default class Product extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Nos produits</h1>
        <h2 className="para" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </h2>
        <div className="product">
          <div className="card_product" id="img1">​Food Sourcing</div>
          <div className="card_product" id="img2">​Food Sourcing</div>
          <div className="card_product" id="img3">​Food Sourcing</div>
          <div className="card_product" id="img4">​Food Sourcing</div>
          <div className="card_product" id="img5">​Food Sourcing</div>
          <div className="card_product" id="img6">​Food Sourcing</div>
        </div>
      </div>
    );
  }
}
