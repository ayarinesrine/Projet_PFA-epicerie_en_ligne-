import { useEffect, useState } from "react";
import axios from "axios";
import "./Boutique.css";



import "reactjs-popup/dist/index.css";
import logo from "./../../assets/image/logo5.png";
import trash from "./../../assets/image/system-outline-39-trash.gif"
import panier from "./../../assets/image/system-outline-6-shopping.gif"
import done from "./../../assets/image/system-outline-31-check.gif"
function Boutique() {
    const [products , setProducts] = useState([])
    const [clicked, setClicked] = useState(false);
    useEffect(()=>{
      axios.get("http://localhost:3636/product" ).then(({data})=>{
        var m = data 
        for(var i = 0 ; i < m.length ; i++){
           m[i].checked = false 
           setClicked(false);
        }
        setProducts(m)
        
      })

    } , [])
     
   function addToBascket(e){
    console.log(e , products)

    var m = products  
        for(var i = 0 ; i < m.length ; i++){
            if(m[i]._id === e._id){
              console.log("kdkdkdkdkdkdkddkkd")
              m[i].checked = true 
              setClicked(true);
            }
        }    
        setProducts(m)
        console.log(products)
        if(localStorage.getItem("basket")){
            var basket = JSON.parse(localStorage.getItem("basket"))
            basket.push(e)
            localStorage.setItem("basket" , JSON.stringify(basket))
         } else {
            localStorage.setItem("basket" , JSON.stringify([e]))         }
    }

  const handleClickRemove = (e) => {
    var m = products  
    for(var i = 0 ; i < m.length ; i++){
        if(m[i]._id === e._id){
          m[i].checked = false 
          setClicked(false);
        }
    }    
    setProducts(m)
  };

  return (
    <div>
          <header className="head">
          <a href="#" className="brand">
            <img className="logo5" src={logo} />
          </a>
          <div className="menu-btn"></div>
          <div className="navigationn">
            <div className="navigation-itemsss">
              <a id="black" href="/">Acceuil</a>
              <a id="black"href="formulaire">Get start</a>
              <a id="black" href="#">Boutique en ligne </a>
            </div>

          </div>
          <a className="a_pa"  href="formulaire" ><img className="a_panier" src={panier} /></a>

        </header>
    <div className="containere">
  
    {products.map((e) => {
      return (
        <div className="wrapperrr">
        <div className="containeeer">
        <img className="top" src={e.image} alt="" />
    
          <div className={e.checked ? "bottomm clicked" : "bottomm"}>
            <div className="lefttt">
              <div className="detailsss">
                <h1 className="productName">{e.name}</h1>
                <p className="productPrice">{e.price} DT</p>
              </div>
              <div className="buy" onClick={() => {
                    addToBascket(e);
                  }}>
                <img src={panier} className="lord_icon"/>
              </div>
            </div>
            <div className="righttt">
              <div className="donee">
                <img src={done} className="lord_icon"/>
              </div>
              <div className="detailsss">
              <h1 className="productName">{e.name}</h1>
                <p className="productpp" >Ajouté au panier </p>
              </div>
              <div className="remove" onClick={()=>{handleClickRemove(e)}}>
                <img className="lord_icon" src={trash}/>
              </div>
            </div>
          </div>
        </div>
        <div className="insideee">
          <div className="iconn">
          +
          </div>
          <div className="contentsss">
          {e.description}
          </div>
        </div>
      </div>
      );
    })}
  </div></div>
  );
}

export default Boutique;
