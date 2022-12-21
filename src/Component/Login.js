import React from 'react'
import { useState,useRef } from 'react';
import { adminCredentials } from './useEffectt';
import { useNavigate } from "react-router-dom";

export default function Login() { 
  
    const EmailAddressRef= useRef();
    const PasswordRef = useRef();
  
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    
    const submitHandler = (e) => {
      e.preventDefault();
    
      const EmailAddress = EmailAddressRef.current.value;
      const Password = PasswordRef.current.value;
  
      if(EmailAddress.trim() == adminCredentials.EmailAddress &&Password.trim() == adminCredentials.Password) {
        navigate("/Home");
          return;
      }
      else {
          setError('Invalid EmailAddress or password!');
      
      }
    }
  
  
    return ( 
      <div id='main-container'>

      <form id='form-cont' action="" className="form" onSubmit={submitHandler}>
        <h3>Login</h3>
        
        <div className="mb-3">
          <label>EmailAddress</label>
          <input
            type="email"ref={EmailAddressRef}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"ref={PasswordRef}

            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
         
        </p>
        <div className="action">
            {error && <p>{error}</p>}
          </div>

      </form>
      
      </div>
    )
    }
  
