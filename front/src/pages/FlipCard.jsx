import React, { Component } from "react";
import "./FlipCard.css";

export default class FlipCard extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="card">
          <input
            type="checkbox"
            id="card1"
            className="more"
            aria-hidden="true"
          />
          <div className="content">
            <div className="front" id="front1">
              <div className="inner">
                <h2>Herbes</h2>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <label for="card1" className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back" >
              <div className="inner">
                <div>
                  Les herbes aromatiques agissant sur la tension nerveuse qui
                  regroupe plus de 150 espèces et son action antibactérienne est
                  prouvée scientifiquement. C’est une source de fibres, de
                  proteines, de vitamines A, B, et C.
                </div>
                <label for="card1" className="button return" aria-hidden="true">
                  Return
                </label>
              </div>
            </div>
          </div>
        </div>
       
       
      </div>
    );
  }
}
