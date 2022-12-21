import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Seeker() {
  const navigate= useNavigate();
  const goback=()=>{
    navigate(-1);
  };
  const[cdata,setdata]=useState([{id:1,pic: <img src={require('./donor1.webp')} class="card-img-top" alt="..."/>,Title:"B-Group(A+)",desc:"A+ Donors are listed here",desc2:"Visit Donors"},
  {id:2,pic: <img src={require('./image3.jpg')} class="card-img-top" alt="..."/>,Title:"B-Group(B+)",desc:" B+ Donors are listed here ",desc2:"Visit Donors"},{id:3,pic: <img src={require('./image3.jpg')} class="card-img-top" alt="..."/>,Title:"B-Group(O-)",desc:" O- Donors are listed here ",desc2:"Visit Donors"},{id:4,pic: <img src={require('./image3.jpg')} class="card-img-top" alt="..."/>,Title:"B-Group(O+)",desc:" O+ Donors are listed here ",desc2:"Visit Donors"}
  ,]);  

    return ( 
      <div id='main-container'>
      
      
      <form >
        <h3>Order Blood</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3">
          <label>Father Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Father Name"
          />
        </div>
        <div className="mb-3">
          <label>Blood Group</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Blood Group you are looking"
          />
        </div>
        <div className="mb-3">
          <label>Quantity</label>
          <input type="text" className="form-control" placeholder="Enter Quantity of Blood" />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="Enter your Address" />
        </div>
        <div className="mb-3">
          <label>Contact No</label>
          <input type="text" className="form-control" placeholder="Enter Your Contact No" />
        </div>
        
        
        <div className="d-grid">
          <button type="Search" className="btn btn-primary">
            Order Blood
          </button>
        </div>
       
      </form>

      <div id='card-container' style={{display:"flex"}}>
{
cdata.map((cdta)=>(
<div  class="card"  style={{width: "18rem",height:"22rem",marginLeft:30}}>
  <><>{cdta.pic}{cdta.id}</></>
  <div class="card-body">
    <h5 class="card-title">{cdta.Title}</h5>
    <p class="card-text">{cdta.desc}</p>
  <button class="btn btn-primary">Visit Donors</button>
  </div>
</div>
))
}

</div>
<hr/>
  <button className="btn btn-primary" style={{backgroundColor:"Highlight"}} onClick={()=>goback()}>Goto SignIn Page</button>

      </div>
    )
  }
