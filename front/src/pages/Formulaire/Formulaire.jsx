import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Formulaire.css";
import "reactjs-popup/dist/index.css";
import logo from "./../../assets/image/logo5.png";
function Formulaire() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  function filter() {
    axios.get("http://localhost:3636/product").then(({ data }) => {
      var filtred = [];
      var queryList = query.split(" ");
      data.forEach((e) => {
        queryList.forEach((q) => {
          if (e.description.includes(q)) {
            filtred.push(e);
          }
        });
      });
      console.log("filtred", filtred);
      setProducts(filtred);
    });
  }

  function addToBascket(e) {
    if (localStorage.getItem("basket")) {
      var basket = JSON.parse(localStorage.getItem("basket"));
      basket.push(e);
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      localStorage.setItem("basket", JSON.stringify([e]));
    }
  }
  return (
    <div>
      <header className="head">
        <a href="/" className="brand">
          <img className="logo55" src={logo} />
          
        </a>
        <h1 className="formulaire_h1">Remplissez ce formulaire pour obtenir votre régime personnalisé</h1>

        <div className="menu-btn"></div>
        
      </header>
      
      <div className="div_formul_total">
        <div className="div_formul">
        <input className="div_formul_input" placeholder="votre poids (kg) "></input>
        <input className="div_formul_input" placeholder="votre taille  (cm)"></input>
        <input className="div_formul_input" placeholder="votre tension artérielle (mmHg)"></input>
        <input className="div_formul_input" placeholder="taux de Glycémie (mg/dL)"></input> 
          <input
          className="div_formul_input"
          placeholder="Veuillez indiquer toute maladie dont vous souffrez"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
        className="div_formul_button"
          onClick={() => {
            filter();
          }}
        >
          Voir le régime
        </button>
        <Link to="/basket"> <button className="div_formul_voir_panier"
                 
                 >
                   Voir le panier
                 </button></Link></div>
       
        <div className="formulaire">
          {products.map((e) => {
            return (
              <div>

                <img src={e.image} id="halim" alt="" />
                <h1>{e.name}</h1>
                <p>{e.price} DT</p>
                <p>{e.description}</p>
                <button
                className="buttonSimple"
                  onClick={() => {
                    addToBascket(e);
                  }}
                >
                  add to basket
                </button>
              </div>
            );
          })}
          
            
        </div>
        
      </div>
    </div>
  );
}

export default Formulaire;


