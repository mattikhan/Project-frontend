import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyForm from './MyForm'

export default function Home () {
  const navigate= useNavigate();
  const goback=()=>{
    navigate(-1);
  };
  

    return (
      <div id='main-container'>
        
      
      <div >
        < MyForm/>
      <img src='\image (2).jpeg' alt='image' style={{height:"100vh",width:"100%"}}></img>
     
  </div>
  <hr/>
  <button className="btn btn-primary" style={{backgroundColor:"Highlight"}} onClick={()=>goback()}>Goto Signin Page</button>
  </div>
      
      
    
    )
  }
