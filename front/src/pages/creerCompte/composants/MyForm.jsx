import React from 'react';
import { Outlet, Link , useNavigate } from "react-router-dom";
import { useState } from 'react';

import "./MyForm.css"
import axios from 'axios';

const MyForm = () => {
  const [email , setEmail] = useState("") 
  const navigate = useNavigate();

  const [password , setPassword] = useState("") 
  function signup(){
    axios.post("http://localhost:3636/auth/user/signup" , {email , password}).then(({data})=>{
      console.log("kakakak" , data)
      if(data.token){
        localStorage.setItem("token" , data.token)
        navigate("/formulaire");
      } 
    }).catch((err)=>{
      alert("Eroooor")
    })
  }
  return (
    <div className="registration-form">
      <div className='form'>
      <h3 className='titre1'>Bienvenu</h3>
        <h1>votre santé est notre priorité</h1>
        <div className="form-group">
          <input type="text" className="form-control item" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control item" id="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control item" id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
        </div>

        <div className="form-group">
          <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-block create-account" onClick={()=>{signup()}}>Créer Compte</button>
        </div>
      </div>
      
    </div>
  );
};

export default MyForm;
