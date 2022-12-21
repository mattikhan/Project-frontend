import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';
import Donor from './Donor';
import Home from './Home';
import About from './About';
import Seeker from './Seeker';
import Stock from './Stock';


function Main() {
    return ( 
        <Router>
            <div>



      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
          <h1>BDMS</h1>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/Home'}>
                   Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/About'}>
                   About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Donor'}>
                   TopDonor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Stock'}>
                   Stock
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Seeker'}>
                   Seeker
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Login
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link" to={'/SignUp'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
          <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
        </nav>
        </div>
      </div>
      <div>
      <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Donor" element={<Donor/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Seeker" element={<Seeker/>} />
              <Route path="/Stock" element={<Stock/>} />
            </Routes>
          </div>
        </div>
        </div>
        
      <Footer/>
      
    </Router>
     );
}

export default Main;

