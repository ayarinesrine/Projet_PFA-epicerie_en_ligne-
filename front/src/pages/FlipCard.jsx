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
                <div className="text">
                  <h3 className="Rygimi">Rygimi</h3>
                  <h2>Herbes</h2>
                </div>

                <label for="card1" className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back" id="back1">
              <div className="inner">
                <div className="paragraph">
                  Les herbes aromatiques agissant sur la tension nerveuse qui
                  regroupe plus de 150 espèces et son action antibactérienne est
                  prouvée scientifiquement. C’est une source de fibres, de
                  proteines, de vitamines A, B, et C.
                </div>
                <label for="card1" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <input
            type="checkbox"
            id="card2"
            className="more"
            aria-hidden="true"
          />
          <div className="content">
            <div className="front" id="front2">
              <div className="inner">
                <div className="text">
                  <h3 className="Rygimi">Rygimi</h3>
                  <h2>Herbes</h2>
                </div>

                <label for="card2" className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back" id="back1">
              <div className="inner">
                <div className="paragraph">
                  La maladie cœliaque est causée par l’incapacité d’absorber le
                  gluten alimentaire, une protéine contenue dans le blé, l’orge
                  et le seigle.
                </div>
                <label for="card2" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <input
            type="checkbox"
            id="card3"
            className="more"
            aria-hidden="true"
          />
          <div className="content">
            <div className="front" id="front3">
              <div className="inner">
                <div className="text">
                  <h3 className="Rygimi">Rygimi</h3>
                  <h2>Herbes</h2>
                </div>

                <label for="card3" className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back" id="back1">
              <div className="inner">
                <div className="paragraph">
                  Une huile alimentaire est une huile végétale comestible
                  liquide, à la température de 15°C. Cette matière grasse
                  d'origine végétale, constituée à plus de 99% de lipides, est
                  donc très énergétique.
                </div>
                <label for="card3" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
