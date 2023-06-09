import React, { Component } from 'react'
import "./Produit.css"

export default class Produit extends Component {
  render() {
    return (<div >
      <h1 className="title">Nos Produits </h1>
          <div className="FlipCard">
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
                <div className="Rygimi">Rygimi</div>
                <h2 className="texte">Herbes</h2>
                <div className="rating"></div>
                <label for="card1" className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="paragraph">
                  Les herbes aromatiques agissant sur la tension nerveuse qui
                  regroupe plus de 150 espèces et son action antibactérienne
                  est prouvée scientifiquement. C’est une source de fibres, de
                  proteines, de vitamines A, B, et C.
                </div>
                <label
                  for="card1"
                  className="button return"
                  aria-hidden="true"
                >
                  Return
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
                <div className="Rygimi">Rygimi</div>
                <h2 className="texte">Maïs</h2>
                <div className="rating"></div>
                <label for="card2" className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="paragraph">
                La maladie cœliaque est causée par l’incapacité d’absorber le gluten alimentaire, une protéine contenue dans le blé, l’orge et le seigle.


                </div>
                <label
                  for="card2"
                  className="button return"
                  aria-hidden="true"
                >
                  Return
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
                <div className="Rygimi">Rygimi</div>
                <h2 className="texte">Huile</h2>
                <div className="rating"></div>
                <label for="card3" className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="paragraph">
                Une huile alimentaire est une huile végétale comestible liquide, à la température de 15°C. Cette matière grasse d'origine végétale, constituée à plus de 99% de lipides, est donc très énergétique.
                </div>
                <label
                  for="card3"
                  className="button return"
                  aria-hidden="true"
                >
                  Return
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="wrapper">
      <div className="card">
        <input
          type="checkbox"
          id="card4"
          className="more"
          aria-hidden="true"
        />
        <div className="content">
          <div className="front" id="front4">
            <div className="inner">
              <div className="Rygimi">Rygimi</div>
              <h2 className="texte">Miel</h2>
              <div className="rating">
             
              </div>
              <label for="card4" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back" >
            <div className="inner">
              <div className="paragraph">
              Ce produit naturel de la ruche dispose de propriétés servant à inhiber la croissance des bactéries et des champignons et prévient leur prolifération.
              </div>
              <label for="card4" className="button return" aria-hidden="true">
                Return
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <input
          type="checkbox"
          id="card5"
          className="more"
          aria-hidden="true"
        />
        <div className="content">
          <div className="front" id="front5">
            <div className="inner">
              <div className="Rygimi">Rygimi</div>
              <h2 className="texte">Fruits et légumes bio</h2>
              <div className="rating">
             
              </div>
              <label for="card5" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back" >
            <div className="inner">
              <div className="paragraph">
              l’agriculture bio utilise des alternatives plus respectueuses de l’environnement.
              </div>
              <label for="card5" className="button return" aria-hidden="true">
                Return
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <input
          type="checkbox"
          id="card6"
          className="more"
          aria-hidden="true"
        />
        <div className="content">
          <div className="front" id="front6">
            <div className="inner">
              <div className="Rygimi">Rygimi</div>
              <h2 className="texte">Thé</h2>
              <div className="rating">
             
              </div>
              <label for="card6" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back" >
            <div className="inner">
              <div className="paragraph">
              Le thé : de nombreux bienfaits pour la santé Riche en antioxydants ; Teneur modérée en caféine ; Participe à la couverture de nos besoins hydriques ; Protègent les cellules du vieillissement ; Prévient les caries dentaires.
              </div>
              <label for="card6" className="button return" aria-hidden="true">
                Return
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  
    )
  }
}
