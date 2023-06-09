import { Outlet, Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import axios  from "axios";
import "./Formulaire.css"
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import logo from "./../../assets/image/logo5.png";
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
         <header className="head">
          <a href="#" className="brand">
            <img className="logo5" src={logo} />
          </a>
          <div className="menu-btn"></div>
          <div className="navigation">
            <div className="navigation-items">
              <a id="black" href="/">Acceuil</a>
              <a id="black"href="#">Get start</a>
              <a id="black" href="products">Boutique en ligne</a>
             
              <Popup trigger={<a id="black"> Connexion</a>}>
                <div>
                  <div className="center">
                    <h1>Se connecter</h1>
                    <div>
                      <div className="inputbox">
                        <input
                          type="email"
                          required="required"
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                        <span>Email</span>
                      </div>
                      <div className="inputbox">
                        <input
                          type="password"
                          required="required"
                          onChange={(e) => {
                            this.setState({ password: e.target.value });
                          }}
                        />
                        <span>Password</span>
                      </div>
                      <div className="inputbox">
                        <button
                          onClick={() => {
                            this.props.login(
                              this.state.email,
                              this.state.password
                            );
                          }}
                        >
                          Connexion
                        </button>
                      </div>
                      <div>
                        <Link to="/Signup">Créer Compte</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </header>
        <input type="text" onChange={(e)=>{ setQuery(e.target.value)}} />
        <button onClick={()=>{filter()}}>submit</button>
        <div className="formulaire">
        <div>hhhhhhhhhhhhh</div>
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
