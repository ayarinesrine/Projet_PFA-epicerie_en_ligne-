import React, { Component } from 'react'
import Slider from "./Composants/Slider";
import Bienvenu from "./Composants/Bienvenu";
import About from './Composants/About';
import Valeur from './Composants/Valeur';
import Produit from './Composants/Produit';
import Contact from './Composants/Contact';
import Steps from './Composants/Steps';
import Footer from './Composants/Footer';
import { Outlet, Link , useNavigate} from "react-router-dom";
import axios from "axios";

 function Home() {
  const navigate = useNavigate();

  function login(email , password){

    axios.post("http://localhost:3636/auth/user/signin" , {email  , password }).then(({data})=>{
      console.log("kakakak" , data)
      if(data.token){
        localStorage.setItem("token" , data.token)

        navigate("/formulaire");

      }
    })
  }

    return (
      <div>
        <Slider login={login}></Slider>
        <Bienvenu></Bienvenu>
        <About></About>
        <Valeur></Valeur>
        <Produit></Produit>
         <Steps></Steps>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
  
}

export default Home