import { Outlet, Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import axios  from "axios";
import "./Formulaire.css"

function Formulaire(){
    const navigate = useNavigate();
    const [products , setProducts] = useState([])
    const [query , setQuery] = useState("")

    function filter(){
        axios.get("http://localhost:3636/product" ).then(({data})=>{
            var filtred = []
            var queryList = query.split(" ")
            data.forEach((e)=>{
                 queryList.forEach((q)=>{
                    if(e.description.includes(q)){
                        filtred.push(e)
                    }
                 })
            })
            console.log("filtred" , filtred)
            setProducts(filtred)
          })
    }

    function addToBascket(e){
        if(localStorage.getItem("basket")){
           var basket = JSON.parse(localStorage.getItem("basket"))
           basket.push(e)
           localStorage.setItem("basket" , JSON.stringify(basket))
        } else {
           localStorage.setItem("basket" , JSON.stringify([e]))         }
   }
    return (<div>
        <input type="text" onChange={(e)=>{ setQuery(e.target.value)}} />
        <button onClick={()=>{filter()}}>submit</button>
        <div className="containere">
        {
            products.map((e)=>{
                return <div>
                    <img src={e.image} id="halim" alt="" />
                    <h1>{e.name}</h1>
                    <p>{e.price}</p>
                    <p>{e.description}</p>
                    <button onClick={()=>{addToBascket(e)}}>add to basket</button>
                </div>
            })
            
        }
    </div>
    </div>)
}

export default Formulaire
