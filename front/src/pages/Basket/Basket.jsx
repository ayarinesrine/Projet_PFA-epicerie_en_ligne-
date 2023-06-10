import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./../../assets/image/logo5.png";
import "./Basket.css"
function Basket() {
  const [products, setProducts] = useState([]);
  const [adress, setAdress] = useState([]);
  const [to, setto] = useState(false);
  function getBzsket() {
    setProducts(JSON.parse(localStorage.getItem("basket")));
  }
  useEffect(() => {
    getBzsket();
  }, []);

  function remove(id) {
    var list = JSON.parse(localStorage.getItem("basket"));
    for (var i = 0; i < list.length; i++) {
      if (id === list[i]._id) {
        list.splice(i, 1);
      }
    }
    localStorage.setItem("basket", JSON.stringify(list));
    getBzsket();
  }

  function order() {
    axios
      .post("http://localhost:3636/auth/user/verify", {
        token: localStorage.getItem("token"),
      })
      .then(({ data }) => {
        var pm = products.map((e) => {
          return {
            name: e.name,
            price: e.price,
            id: e._id,
            adress: adress,
          };
        }).catch((err)=>{
            alert("Eroooor")
          });
        axios.post("http://localhost:3636/order", pm).then(() => {
          alert("successs");
        });
      }).catch((err)=>{
        alert("Eroooor")
      });
  }

  return (
    <div>
      <header className="head">
        <a href="/" className="brand">
          <img className="logo55" src={logo} />
        </a>
        <h1 className="formulaire_h1">
        Veuillez suivre ces étapes pour confirmer votre commande
        </h1>

        <div className="menu-btn"></div>
      </header>
      <div className="panier_bottom">
      {!to ? (
        <div>
          {products.length > 0 ? (
            <div>
              {" "}
              {products.map((e) => {
                return (
                  <div className="gridcolum">
                    <div>
                    {e.name}
                   <img className="img_panier" src={e.image}></img>
                   </div>
                    <button
                    className="btnRemove"
                      onClick={() => {
                        remove(e._id);
                      }}
                    >
                      remove
                    </button>
                   
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <h1 className="formulaire_h1">Votre panier est vide</h1>
            </div>
          )}
          <button
            onClick={() => {
              setto(true);
            }}
          >
            confirme
          </button>
        </div>
      ) : (
        <div className="displaygrid">
           <input className="div_formul_inputt"  placeholder="Nom"
            type="text"
        
          />
           <input className="div_formul_inputt"  placeholder="Prénom"
            type="text"
        
          />
           <input className="div_formul_inputt"  placeholder="Num de telephone"
            type="text"
        
          />
          <input className="div_formul_inputt"  placeholder="adresse"
            type="text"
            onClick={(e) => {
              setAdress(e.target.value);
            }}
          />
         
          <button
          className="div_formul_button"
            onClick={() => {
              order();
            }}
          >
            confirme
          </button>
        </div>
      )}
    </div></div>
  );
}

export default Basket;
