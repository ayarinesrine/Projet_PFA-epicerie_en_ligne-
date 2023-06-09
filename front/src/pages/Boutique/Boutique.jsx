import { useEffect, useState } from "react";
import axios from "axios";
import "./Boutique.css";
import trash from "./../../assets/image/trash.gif"
import done from "./../../assets/image/done.gif"
function Boutique() {
    const [products , setProducts] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:3636/product" ).then(({data})=>{
        var m = data 
        for(var i = 0 ; i < m.length ; i++){
           m[i].checked = false 
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
        }
    }    
    setProducts(m)
  };

  return (
    <div className="containere">
    {products.map((e) => {
      return (
        <div className="wrapperrr">
        <div className="containeeer">
        <img className="top" src="https://images.pexels.com/photos/4113890/pexels-photo-4113890.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load&fbclid=IwAR1pBBmX9MlpgZl4jLFfwl3zDoARV8ZafbAFdTSW-5uz-oKeGpsN-QuEbLE" alt="" />
    
          <div className={e.checked ? "bottomm clicked" : "bottomm"}>
            <div className="lefttt">
              <div className="detailsss">
                <h1 className="productName">{e.name}</h1>
                <p className="productPrice">{e.price}</p>
              </div>
              <div className="buy" onClick={() => {
                    addToBascket(e);
                  }}>
                <i className="material-icons">{e.checked + ""}</i>
              </div>
            </div>
            <div className="righttt">
              <div className="donee">
                <img src={done} className="lord_icon"/>
              </div>
              <div className="detailsss">
              <h1 className="productName">{e.name}</h1>
                <p >Added </p>
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
  </div>
  );
}

export default Boutique;
