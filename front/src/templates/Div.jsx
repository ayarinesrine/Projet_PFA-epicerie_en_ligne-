import React, { Component } from "react";
import "./Div.css";
export default class Div extends Component {
  render() {
    return (
      <div className="div">
        <h1>Nos valeurs​</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </h2>
        <div className="card">
          <div className="card1">
            <div className="num" >1</div>
            <div className="title">Base Meals</div>
            <div className="parg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="learn_more"  id="jaune">learn more</div>
          </div>
          <div className="card2">
            <div className="num" id="jaune">2</div>
            <div className="title">Knife Skills</div>
            <div className="parg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="learn_more" id="jaune">learn more</div>
          </div>
          <div className="card3">
            <div className="num" id="white">3</div>
            <div className="title">Cooking Chicken</div>
            <div className="parg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="learn_more" id="white">learn more</div>
          </div>
        </div>
      </div>
    );
  }
}
